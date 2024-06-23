import {Either, right} from "@shared/either";
import {IError} from "@shared/iError";
import {injectable} from "inversify";

export interface IChainError extends IError {
  step: string
  data: any
}

interface IChain<I> {
  setNext: (handler: IChain<I>) => IChain<I>
  handle: (request: I) => Either<IChainError, I> | Promise<Either<IChainError, I>>
}

@injectable()
export abstract class Chain<I> implements IChain<I> {
  private nextHandler: IChain<I> | undefined;

  public setNext(handler: IChain<I>): IChain<I> {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: I): Either<IChainError, I> | Promise<Either<IChainError, I>> {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return right(request);
  }
}
