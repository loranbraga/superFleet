import {validate, ValidationError} from "class-validator";
import {IError} from "@shared/iError";
import {Either, right, left} from "@shared/either";

function getErrors(errors: ValidationError[]) {
  const error = errors.map((i) => ({
    property: i.property,
    constraints: i.constraints,
  }));

  return left({
    code: "val-001",
    message: "Validation Error",
    shortMessage: "validationError",
    details: error,
  });
}

export async function validateInput(serializer: object): Promise<Either<IError, any>> {
  try {
    const errors = await validate(serializer, {whitelist: true, forbidNonWhitelisted: true});
    if (errors.length) {
      return getErrors(errors);
    }

    return right(serializer);
  } catch (err) {
    return getErrors(err as ValidationError[]);
  }
}
