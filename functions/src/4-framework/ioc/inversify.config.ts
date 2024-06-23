import {container} from "@shared/ioc/container";
// import {RepositoryModule} from "./repositoryModule";
import {OperatorModule} from "./operatorModule";
import {UseCasesModule} from "./useCasesModule";
// import {ServicesModule} from "./servicesModule";

// container.load(RepositoryModule);
container.load(UseCasesModule);
container.load(OperatorModule);
// container.load(ServicesModule);
