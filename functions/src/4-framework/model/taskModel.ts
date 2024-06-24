import {Collection} from "fireorm";

@Collection()
export class TaskModel {
  id!: string;
  incrementId!: number;
  name!:string;
  description?:string;
  score?: number;
  updatedAt?: Date;
  createdAt?: Date;
}

