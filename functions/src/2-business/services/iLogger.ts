/* eslint-disable @typescript-eslint/no-explicit-any */
export const ILoggerServiceToken = Symbol.for("ILoggerService");

export interface ILoggerService {
  log(log: any, level?: string): void
  error(log: any): void
  warn(log: any): void
  info(log: any): void
  debug(log: any): void
}
