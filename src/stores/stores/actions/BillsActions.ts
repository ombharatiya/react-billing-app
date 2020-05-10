import { StoreAction } from "src/stores/StoreHelper";
import { GetBillsResponse } from "../../../services/billsServices/getBills/GetBillsResponse.data";

export enum BillsActionType {
  GetSelectedBillCard = "GET_SELECTED_BILL_CARD",

  GetBillsStart = "GET_BILLS_START",
  GetBillsSuccess = "GET_BILLS_SUCCESS",
  GetBillsError = "GET_BILLS_ERROR",
}

export interface GetSelectedBillPayload {
  readonly billId: string;
}

export interface GetBillsStartPayload {
  // readonly site: string;
}

export interface GetBillsSuccessPayload {
  readonly response: GetBillsResponse;
}

export interface BillsErrorPayload {
  readonly error: Error | any;
}

export type BillsPayload =
  | GetSelectedBillPayload
  | GetBillsStartPayload
  | GetBillsSuccessPayload
  | BillsErrorPayload
  | null;

export type BillsAction = StoreAction<BillsActionType, BillsPayload>;

export class BillsActions {
  // getCardDetails
  public static getSelectedBill(data: GetSelectedBillPayload): BillsAction {
    return { type: BillsActionType.GetSelectedBillCard, data };
  }

  // getBills
  public static getBillsStart(data: GetBillsStartPayload): BillsAction {
    return { type: BillsActionType.GetBillsStart, data };
  }
  public static getBillsSuccess(data: GetBillsSuccessPayload): BillsAction {
    return { type: BillsActionType.GetBillsSuccess, data };
  }
  public static getBillsError(data: BillsErrorPayload): BillsAction {
    return { type: BillsActionType.GetBillsError, data };
  }
}
