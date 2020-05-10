import { StoreAction } from "src/stores/StoreHelper";
import { GetBillsResponse } from "../../../services/billsServices/getBills/GetBillsResponse.data";
import { Bill } from "src/model/Bill";
import { GetNewBillIdResponse } from "src/services/billsServices/getNewBillId/GetNewBillIdResponse.data";

export enum BillsActionType {
  GetSelectedBillCard = "GET_SELECTED_BILL_CARD",
  GetNewBillIdStart = "GET_NEW_BILLID_START",
  GetNewBillIdSuccess = "GET_NEW_BILLID_SUCCESS",

  GetBillsStart = "GET_BILLS_START",
  GetBillsSuccess = "GET_BILLS_SUCCESS",

  AddBillsStart = "ADD_BILL_START",
  AddBillsSuccess = "ADD_BILL_SUCCESS",

  BillsError = "GET_BILLS_ERROR",
}

export interface GetSelectedBillPayload {
  // readonly selectedBillId: number | undefined;
}

export interface GetNewBillIdStartPayload {
  // readonly site: string;
}

export interface GetNewBillIdSuccessPayload {
  readonly response: GetNewBillIdResponse;
}

// export interface GetNewBillIdPayload {
//   // readonly selectedBillId: number | undefined;
// }
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
  readonly response: GetBillsResponse;
}

export interface BillsErrorPayload {
  readonly error: Error | any;
}

export type BillsPayload =
  | GetSelectedBillPayload
  | GetNewBillIdStartPayload
  | GetNewBillIdSuccessPayload
  | GetBillsStartPayload
  | GetBillsSuccessPayload
  | AddBillsStartPayload
  | AddBillsSuccessPayload
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
    return { type: BillsActionType.BillsError, data };
  }

  // addBills
  public static addBillsStart(data: AddBillsStartPayload): BillsAction {
    return { type: BillsActionType.AddBillsStart, data };
  }
  public static addBillsSuccess(data: AddBillsSuccessPayload): BillsAction {
    return { type: BillsActionType.AddBillsSuccess, data };
  }
  public static addBillsError(data: BillsErrorPayload): BillsAction {
    return { type: BillsActionType.BillsError, data };
  }

  // getNewBillId
  public static getNewBillIdStart(data: GetNewBillIdStartPayload): BillsAction {
    return { type: BillsActionType.GetNewBillIdStart, data };
  }
  public static getNewBillIdSuccess(
    data: GetNewBillIdSuccessPayload
  ): BillsAction {
    return { type: BillsActionType.GetNewBillIdSuccess, data };
  }
  public static getNewBillIdError(data: BillsErrorPayload): BillsAction {
    return { type: BillsActionType.BillsError, data };
  }
}
