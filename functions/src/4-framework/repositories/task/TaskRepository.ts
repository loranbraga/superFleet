import {injectable} from "inversify";
import {ITaskRepository} from "@business/repositories/task/iTaskRepository";
import {ITaskEntity} from "@domain/entities/task/taskEntity";
import {TaskModel} from "@framework/model/taskModel";
import {getRepository} from "fireorm";


@injectable()
export class TaskRepository implements ITaskRepository {
  async create(taskEntity: ITaskEntity): Promise<ITaskEntity> {
    const taskRepository = getRepository(TaskModel);
    const result = await taskRepository.create(taskEntity as TaskModel);

    return result;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findById(incrementId: number): Promise<ITaskEntity> {
    throw new Error("Method not implemented.");
  }
}
