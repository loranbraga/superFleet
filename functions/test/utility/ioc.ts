import 'source-map-support/register'
import 'reflect-metadata'
import { container } from '@shared/ioc/container'
import { OperatorModule } from '@framework/ioc/operatorModule'
import { UseCasesModule } from '@framework/ioc/useCasesModule'
import { mockLoggerService } from './mocks/logger.mock'

container.load(UseCasesModule)
container.load(OperatorModule)
mockLoggerService(container)

export { container }
