import {ContainerModule, interfaces} from "inversify";
import {CreateTaskUseCase} from "@business/useCases/task/createTaskUseCase";


export const UseCasesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateTaskUseCase).to(CreateTaskUseCase);
});
