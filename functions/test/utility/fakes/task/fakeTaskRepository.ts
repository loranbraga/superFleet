import {ITaskRepository} from "@business/repositories/task/iTaskRepository";
import {fakeTaskEntity} from "./fakeTaskEntity";

export const fakeTaskRepository: ITaskRepository = {
  create: jest.fn().mockReturnValue({...fakeTaskEntity}),
  findById: jest.fn().mockReturnValue({...fakeTaskEntity}),
};
