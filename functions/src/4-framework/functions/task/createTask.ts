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
    return response.send(result);
  } catch (error) {
    return response.status(400).send(error);
  }
};


export default main;
