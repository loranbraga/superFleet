import {ContainerModule, interfaces} from "inversify";
import {ITaskRepository, ITaskRepositoryToken} from "@business/repositories/task/iTaskRepository";
import {TaskRepository} from "@framework/repositories/task/TaskRepository";


export const RepositoryModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<ITaskRepository>(ITaskRepositoryToken).to(TaskRepository);
});
