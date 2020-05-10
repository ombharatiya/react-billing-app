import { StoreAction } from "src/stores/StoreHelper";
import { GetBillsResponse } from "../../../services/billsServices/getBills/GetBillsResponse.data";
import { Bill } from "src/model/Bill";
import { GetNewBillIdResponse } from "src/services/billsServices/getNewBillId/GetNewBillIdResponse.data";

export enum BillsActionType {
  GetSelectedBillCard = "GET_SELECTED_BILL_CARD",
  SetSelectedBillCard = "SET_SELECTED_BILL_CARD",

  GetNewBillIdStart = "GET_NEW_BILLID_START",
  GetNewBillIdSuccess = "GET_NEW_BILLID_SUCCESS",

  GetBillsStart = "GET_BILLS_START",
  GetBillsSuccess = "GET_BILLS_SUCCESS",

  AddBillsStart = "ADD_BILL_START",
  AddBillsSuccess = "ADD_BILL_SUCCESS",

  EditBillsStart = "EDIT_BILL_START",
  EditBillsSuccess = "EDIT_BILL_SUCCESS",

  DeleteBillStart = "DELETE_BILL_START",
  DeleteBillSuccess = "DELETE_BILL_SUCCESS",

  BillsError = "GET_BILLS_ERROR",
}

export interface GetSelectedBillPayload {
  // readonly selectedBillId: number | undefined;
}

export interface SetSelectedBillPayload {
  readonly selectedBillId: number;
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

export interface EditBillsStartPayload {
  readonly bill: Bill;
}

export interface EditBillsSuccessPayload {
  readonly response: GetBillsResponse;
}

export interface DeleteBillStartPayload {
  readonly id: number;
}

export interface DeleteBillSuccessPayload {
  readonly response: GetBillsResponse;
}

export interface BillsErrorPayload {
  readonly error: Error | any;
}

export type BillsPayload =
  | GetSelectedBillPayload
  | SetSelectedBillPayload
  | GetNewBillIdStartPayload
  | GetNewBillIdSuccessPayload
  | GetBillsStartPayload
  | GetBillsSuccessPayload
  | AddBillsStartPayload
  | AddBillsSuccessPayload
  | EditBillsStartPayload
  | EditBillsSuccessPayload
  | BillsErrorPayload
  | null;

export type BillsAction = StoreAction<BillsActionType, BillsPayload>;

export class BillsActions {
  // getCardDetails
  public static getSelectedBill(data: GetSelectedBillPayload): BillsAction {
    return { type: BillsActionType.GetSelectedBillCard, data };
  }

  // setCardDetails
  public static setSelectedBill(data: SetSelectedBillPayload): BillsAction {
    return { type: BillsActionType.SetSelectedBillCard, data };
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

  // editBills
  public static editBillsStart(data: EditBillsStartPayload): BillsAction {
    return { type: BillsActionType.EditBillsStart, data };
  }
  public static editBillsSuccess(data: EditBillsSuccessPayload): BillsAction {
    return { type: BillsActionType.EditBillsSuccess, data };
  }
  public static editBillsError(data: BillsErrorPayload): BillsAction {
    return { type: BillsActionType.BillsError, data };
  }

  // addBills
  public static deleteBillStart(data: DeleteBillStartPayload): BillsAction {
    return { type: BillsActionType.DeleteBillStart, data };
  }
  public static deleteBillSuccess(data: DeleteBillSuccessPayload): BillsAction {
    return { type: BillsActionType.DeleteBillSuccess, data };
  }
  public static deleteBillError(data: BillsErrorPayload): BillsAction {
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
