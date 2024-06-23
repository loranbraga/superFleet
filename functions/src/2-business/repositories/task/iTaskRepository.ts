import {ITaskEntity} from "@domain/entities/task/taskEntity";

export const ITaskRepositoryToken = Symbol.for("ITaskRepository");

export interface ITaskRepository {
  create(taskEntity: ITaskEntity): Promise<ITaskEntity>
  findById(incrementId: number): Promise<ITaskEntity>
}
