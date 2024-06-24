import {Collection} from "fireorm";

@Collection("tasks")
export class TaskModel {
  id!: string;
  incrementId!: number;
  name!:string;
  description?:string;
  score?: number;
  updatedAt?: Date;
  createdAt?: Date;
}

