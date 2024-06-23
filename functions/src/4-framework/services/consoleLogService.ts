import {injectable} from "inversify";
import {ILoggerService} from "@business/services/iLogger";
import util from "util";
import * as logger from "firebase-functions/logger";

export type LogSeverity = "debug" | "info" | "warn" | "error";
@injectable()
export class ConsoleLogService implements ILoggerService {
  public log(log: unknown, level: LogSeverity = "info"): void {
    log = util.inspect(log, {depth: Infinity});
    validateLog(log, level);
  }

  public error(log: unknown): void {
    this.log(log, "error");
  }

  public warn(log: unknown): void {
    this.log(log, "warn");
  }

  public info(log: unknown): void {
    this.log(log, "info");
  }

  public debug(log: unknown): void {
    this.log(log, "debug");
  }
}

const validateLog = (log: unknown, level: LogSeverity) => {
  try {
    logger[level](`${level}: ${log}`);
  } catch (error) {
    console.info(`info: ${log}`);
  }
};
