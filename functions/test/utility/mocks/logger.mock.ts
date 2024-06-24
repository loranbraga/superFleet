import 'reflect-metadata'
import { Container } from 'inversify'
import { ILoggerService, ILoggerServiceToken } from '@business/services/iLogger'

export function mockLoggerService(container: Container) {
  const logger = {
    log: jest.fn().mockResolvedValue(null) as unknown,
    error: jest.fn().mockResolvedValue(null) as unknown,
    warn: jest.fn().mockResolvedValue(null) as unknown,
    info: jest.fn().mockResolvedValue(null) as unknown,
    debug: jest.fn().mockResolvedValue(null) as unknown,
    notice: jest.fn().mockResolvedValue(null) as unknown,
    crit: jest.fn().mockResolvedValue(null) as unknown,
    alert: jest.fn().mockResolvedValue(null) as unknown,
    emerg: jest.fn().mockResolvedValue(null) as unknown,
  } as ILoggerService
  container.bind(ILoggerServiceToken).toConstantValue(logger)
}
