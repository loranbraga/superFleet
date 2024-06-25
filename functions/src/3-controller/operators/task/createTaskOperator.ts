import {inject, injectable} from "inversify";
import {AbstractOperator} from "@controller/operators/abstractOperator";
import {left, right} from "@shared/either";
import {InputCreateTask, OutputCreateTask} from "@controller/serializers/task/createTaskSerializer";
import {CreateTaskUseCase} from "@business/useCases/task/createTaskUseCase";

@injectable()
export class CreateTaskOperator extends AbstractOperator<InputCreateTask, OutputCreateTask> {
  public constructor(
    @inject(CreateTaskUseCase)
    private readonly createTaskUseCase: CreateTaskUseCase
  ) {
    super();
  }

  protected async run(input: InputCreateTask): Promise<OutputCreateTask> {
    const result = await this.createTaskUseCase.exec(input);
    if (result.isLeft()) {
      return left(result.value);
    }

    return right(result.value);
  }
}
