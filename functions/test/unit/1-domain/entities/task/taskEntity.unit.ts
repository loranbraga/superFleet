import {container} from "@test/utility/ioc";
import {fakeTaskEntity} from "@test/utility/fakes/task/fakeTaskEntity";
import {TaskEntity} from "@domain/entities/task/taskEntity";

describe("1-domain.entities.task.taskEntity", () => {
  beforeEach(() => {
    container.snapshot();
  });

  afterEach(() => {
    container.restore();
  });

  test("should create task entity successful", async () => {
    const taskEntity = TaskEntity.create(fakeTaskEntity);
    if (taskEntity.isRight()) {
      const taskExported = taskEntity.value.export();
      expect(taskExported.name).toBe(fakeTaskEntity.name);
      expect(taskExported.createdAt).toBeDefined();
      expect(taskExported.updatedAt).toBeDefined();
      expect(taskExported.description).toBe(fakeTaskEntity.description);
      expect(taskExported.score).toBe(fakeTaskEntity.score);
    }
  });
});
