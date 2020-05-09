import { StoreAction } from "src/stores/StoreHelper";
import { GetBillsResponse } from "../../../modules/billList/services/getBills/GetBillsResponse.data";
import { Bill } from "src/model/Bill";

export enum BillsActionType {
  GetSelectedBillCard = "GET_SELECTED_BILL_CARD",
  GetNewBillId = "GET_NEW_BILL_ID",

  GetBillsStart = "GET_BILLS_START",
  GetBillsSuccess = "GET_BILLS_SUCCESS",
  BillsError = "GET_BILLS_ERROR",
}

export interface GetSelectedBillPayload {
  // readonly selectedBillId: number | undefined;
}

export interface GetNewBillIdPayload {
  // readonly selectedBillId: number | undefined;
}
// export interface GetSelectedBillPayload {
//   readonly selectedBillId: number | undefined;
// }

export interface GetBillsStartPayload {
  // readonly site: string;
}

export interface GetBillsSuccessPayload {
  readonly response: GetBillsResponse;
}

export interface AddBillsStartPayload {
  readonly bill: Bill;
}

export interface AddBillsSuccessPayload {
  // readonly response: GetBillsResponse;
}

export interface BillsErrorPayload {
  readonly error: Error | any;
}

export type BillsPayload =
  | GetSelectedBillPayload
  | GetNewBillIdPayload
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

  public static getNewBillId(data: GetNewBillIdPayload): BillsAction {
    return { type: BillsActionType.GetNewBillId, data };
  }

  // getBills
  public static getBillsStart(data: GetBillsStartPayload): BillsAction {
    return { type: BillsActionType.GetBillsStart, data };
  }
  public static getBillsSuccess(data: GetBillsSuccessPayload): BillsAction {
    return { type: BillsActionType.GetBillsSuccess, data };
  }
  public static getBillsError(data: BillsErrorPayload): BillsAction {
    return { type: BillsActionType.BillsError, data };
  }

  // addBills
  public static addBillsStart(data: GetBillsStartPayload): BillsAction {
    return { type: BillsActionType.GetBillsStart, data };
  }
  public static addBillsSuccess(data: GetBillsSuccessPayload): BillsAction {
    return { type: BillsActionType.GetBillsSuccess, data };
  }
  public static addBillsError(data: BillsErrorPayload): BillsAction {
    return { type: BillsActionType.BillsError, data };
  }
}
