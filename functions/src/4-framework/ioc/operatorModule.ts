import {ContainerModule, interfaces} from "inversify";
import {CreateTaskOperator} from "@controller/operators/task/createTaskOperator";


export const OperatorModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateTaskOperator).to(CreateTaskOperator);
});
