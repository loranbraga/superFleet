import "reflect-metadata";
import {container} from "@test/utility/ioc";
import {ITaskRepository, ITaskRepositoryToken} from "@business/repositories/task/iTaskRepository";
import {fakeTaskRepository} from "@test/utility/fakes/task/fakeTaskRepository";
import {CreateTaskUseCase} from "@business/useCases/task/createTaskUseCase";
import {fakeTaskEntity} from "@test/utility/fakes/task/fakeTaskEntity";
import {TaskCreationFailed, TaskNameMustHaveLength, TaskScoreInvalid} from "@business/module/errors/task/task";


describe("2-business.useCases.task.createTaskUseCase", () => {
  beforeEach(() => {
    container.snapshot();
  });

  afterEach(() => {
    container.restore();
  });

  container.bind<ITaskRepository>(ITaskRepositoryToken).toConstantValue(fakeTaskRepository);

  test("should create a task successful", async () => {
    const useCase = container.get(CreateTaskUseCase);
    const result = await useCase.exec(fakeTaskEntity);

    expect(result.isRight()).toBeTruthy();
    if (result.isRight()) {
      const exportedTask = result.value;
      expect(exportedTask.name).toBe(fakeTaskEntity.name);
      expect(exportedTask.description).toBe(fakeTaskEntity.description);
      expect(exportedTask.score).toBe(fakeTaskEntity.score);
    }
  });

  test("should throw an error when api throws", async () => {
    jest.spyOn(fakeTaskRepository, "create").mockImplementation(() => {
      throw new Error();
    });

    const useCase = container.get(CreateTaskUseCase);
    const result = await useCase.exec(fakeTaskEntity);
    expect(result.isLeft()).toBeTruthy();
    if (result.isLeft()) {
      expect(result.value).toMatchObject(TaskCreationFailed);
    }
  });

  test("name must have 5 characters or more", async () => {
    const useCase = container.get(CreateTaskUseCase);
    const result = await useCase.exec({
      ...fakeTaskEntity,
      name: "1234",
    });

    expect(result.isLeft()).toBeTruthy();
    if (result.isLeft()) {
      expect(result.value).toMatchObject(TaskNameMustHaveLength);
    }
  });

  test("score must be greater than 0", async () => {
    const useCase = container.get(CreateTaskUseCase);
    const result = await useCase.exec({
      ...fakeTaskEntity,
      score: -1,
    });

    expect(result.isLeft()).toBeTruthy();
    if (result.isLeft()) {
      expect(result.value).toMatchObject(TaskScoreInvalid);
    }
  });

  test("score must be less or equal than 21", async () => {
    const useCase = container.get(CreateTaskUseCase);
    const result = await useCase.exec({
      ...fakeTaskEntity,
      score: 22,
    });

    expect(result.isLeft()).toBeTruthy();
    if (result.isLeft()) {
      expect(result.value).toMatchObject(TaskScoreInvalid);
    }
  });
});
