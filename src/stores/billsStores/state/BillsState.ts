import { Bills } from "src/model/Bill";
import { ReducerState } from "src/stores/StoreHelper";

export class BillsState implements ReducerState {
  public readonly loading: boolean | undefined;
  public readonly success: boolean | undefined;
  public readonly error: any | Error | undefined;

  public readonly bills: Bills | undefined;
  public readonly selectedBillId: number | undefined;
  public readonly newBillId!: number;
}
