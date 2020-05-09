import { BillsState } from "../state/BillsState";
import {
  BillsAction,
  BillsActionType,
  GetSelectedBillPayload,
  GetBillsSuccessPayload,
  BillsErrorPayload,
} from "../actions/BillsActions";
import { budget } from "src/utils/constants";

const initialState: BillsState = {
  loading: false,
  success: false,
  error: undefined,

  bills: budget.bills,
};

export const billsReducers: (
  state: BillsState | undefined,
  action: BillsAction
) => BillsState = (state = initialState, action) => {
  console.log("INSIDE BILLS ALL REDUCERS");
  state = otherReducers(state, action);
  state = getReducers(state, action);
  return state;
};

const otherReducers: (state: BillsState, action: BillsAction) => BillsState = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case BillsActionType.GetSelectedBillCard: {
      const data = action.data as GetSelectedBillPayload;
      return {
        ...state,
        active: data.billId,
      };
    }
    default:
      return state;
  }
};

const getReducers: (state: BillsState, action: BillsAction) => BillsState = (
  state = initialState,
  action
) => {
  console.log("INSIDE BILLS GET REDUCERS");
  switch (action.type) {
    case BillsActionType.GetBillsStart: {
      return { ...state, loading: true, success: false, error: undefined };
    }

    case BillsActionType.GetBillsSuccess: {
      const response = (action.data as GetBillsSuccessPayload).response;
      return {
        ...state,
        loading: false,
        success: true,
        error: undefined,
        bills: response.bills,
      };
    }

    case BillsActionType.GetBillsError: {
      const data = action.data as BillsErrorPayload;
      return {
        ...state,
        loading: false,
        success: false,
        error: data.error,
      };
    }

    default:
      return state;
  }
};
