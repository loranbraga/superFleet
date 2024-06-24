import {AbstractEntity} from "@domain/entities/abstractEntity";
import {Either, right} from "@shared/either";
import {IError} from "@shared/iError";

export interface ITaskEntity {
  id?: string
  incrementId?: number
  name:string
  description?:string
  score?: number
  updatedAt?: Date
  createdAt?: Date
}

export class TaskEntity extends AbstractEntity<ITaskEntity> {
  static create(props: ITaskEntity): Either<IError, TaskEntity> {
    const document = new TaskEntity({
      ...props,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    return right(document);
  }
}
