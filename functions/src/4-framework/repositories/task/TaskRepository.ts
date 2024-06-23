import {injectable} from "inversify";
import {ITaskRepository} from "@business/repositories/task/iTaskRepository";
import {ITaskEntity} from "@domain/entities/task/taskEntity";

@injectable()
export class TaskRepository implements ITaskRepository {
  create(taskEntity: ITaskEntity): Promise<ITaskEntity> {
    throw new Error("Method not implemented.");
  }
  findById(incrementId: number): Promise<ITaskEntity> {
    throw new Error("Method not implemented.");
  }
}
