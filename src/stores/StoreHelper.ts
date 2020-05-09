import { Action } from "redux";

export interface ReducerState {
  readonly loading?: boolean;
  readonly success?: boolean;
  readonly error?: any | Error | undefined | null;
}

export interface StoreAction<TType extends string, TPayload>
  extends Action<TType> {
  readonly type: TType;
  readonly data: TPayload;
}
