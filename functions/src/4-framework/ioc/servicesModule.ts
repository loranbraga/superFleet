import {ContainerModule, interfaces} from "inversify";
// interfaces
import {ILoggerService, ILoggerServiceToken} from "@business/services/iLogger";
import {ConsoleLogService} from "@framework/services/consoleLogService";

export const ServicesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<ILoggerService>(ILoggerServiceToken).to(ConsoleLogService);
});
