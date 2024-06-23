import {validationError} from "@business/module/errors/validation";
import {Validatable} from "@controller/serializers/abstractValidatable";
import {ValidationError} from "class-validator";
import {injectable} from "inversify";

@injectable()
export abstract class AbstractOperator<I, O> {
  protected abstract run (input?: Validatable<I>): Promise<O>

  public async exec(input?: Validatable<I>): Promise<O> {
    try {
      if (input) {
        input.validate();
      }
      return this.run(input);
    } catch (err) {
      if (
        err instanceof Array &&
        err.length &&
        err[0] instanceof ValidationError
      ) {
        const data = err.map((i) => ({
          property: i.property,
          constraints: i.constraints,
        }));
        throw validationError(data);
      }
      throw err;
    }
  }
}
