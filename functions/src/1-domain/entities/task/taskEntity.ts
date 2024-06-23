import {AbstractEntity} from "@domain/entities/abstractEntity";
import {Either, right} from "@shared/either";
import {IError} from "@shared/iError";

export interface ITaskEntity {
  documentId?: string
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
    });

    return right(document);
  }
}
