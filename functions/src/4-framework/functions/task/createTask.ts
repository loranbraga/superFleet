/* eslint-disable @typescript-eslint/no-explicit-any */
import "source-map-support/register";
import "reflect-metadata";
import "@framework/ioc/inversify.config";
import {Request, Response} from "express";
import {container} from "@shared/ioc/container";
import {InputCreateTask} from "@controller/serializers/task/createTaskSerializer";
import {CreateTaskOperator} from "@controller/operators/task/createTaskOperator";

const main = async (request: Request, response: Response) => {
  try {
    const operator = container.get(CreateTaskOperator);
    const input = new InputCreateTask(request.body as object);

    const result = await operator.exec(input);

    if (result.isRight()) {
      return response.send(result.value);
    }
    return response.status(400).send(result.value);
  } catch (error: any) {
    if (error?.code === "val-001") {
      return response.status(400).send(error);
    }
    return response.status(500).send();
  }
};


export default main;
