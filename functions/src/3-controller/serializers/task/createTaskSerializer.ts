import {OutputCreateTaskDto} from "@business/dto/taskDto";
import {Validatable} from "@controller/serializers/abstractValidatable";
import {IsNotEmpty, IsString, IsOptional, IsInt} from "class-validator";

export class InputCreateTask extends Validatable<InputCreateTask> {
  @IsNotEmpty()
  @IsString()
    name!: string;

  @IsOptional()
  @IsString()
    description?: string;

  @IsOptional()
  @IsInt()
    score?: number;
}

export type OutputCreateTask = OutputCreateTaskDto
