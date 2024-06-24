import {inject, injectable} from "inversify";
import {IUseCase} from "@business/useCases/iUseCase";

import {InputCreateTaskDto, OutputCreateTaskDto} from "@business/dto/taskDto";

import {right, left} from "@shared/either";
import {
  TaskCreationFailed,
  TaskNameMustHaveLength,
  TaskScoreInvalid} from "@business/module/errors/task/task";
import {TaskEntity} from "@domain/entities/task/taskEntity";
import {ILoggerService, ILoggerServiceToken} from "@business/services/iLogger";
import {ITaskRepository, ITaskRepositoryToken} from "@business/repositories/task/iTaskRepository";

@injectable()
export class CreateTaskUseCase implements IUseCase<InputCreateTaskDto, OutputCreateTaskDto> {
  public constructor(
    // @inject(IPartnerRepositoryToken) private readonly partnerRepository: IPartnerRepository,
    @inject(ITaskRepositoryToken) private readonly taskRepository: ITaskRepository,
    @inject(ILoggerServiceToken) private readonly log: ILoggerService
  ) {}

  async exec(input: InputCreateTaskDto): Promise<OutputCreateTaskDto> {
    try {
      const {name, score = 0} = input;
      if (name.length < 5) {
        return left(TaskNameMustHaveLength);
      }

      if (score < 0 || score > 21) {
        return left(TaskScoreInvalid);
      }

      const taskEntity = TaskEntity.create(input);
      if (taskEntity.isLeft()) {
        return left(taskEntity.value);
      }

      const createdTask = await this.taskRepository.create(taskEntity.value.export());

      return right(createdTask);
    } catch (error) {
      this.log.error(error);
      return left(TaskCreationFailed);
    }
  }
}
