import {ITaskEntity} from "@domain/entities/task/taskEntity";
import {Either} from "@shared/either";
import {IError} from "@shared/iError";


export interface InputCreateTaskDto {
  name:string
  description?:string
  score?: number
}

export type OutputCreateTaskDto = Either<IError, ITaskEntity>


