import { BillsState } from "../state/BillsState";
import {
  BillsAction,
  BillsActionType,
  // GetSelectedBillPayload,
  GetBillsSuccessPayload,
  BillsErrorPayload,
  AddBillsSuccessPayload,
  GetNewBillIdSuccessPayload,
  SetSelectedBillPayload,
  DeleteBillSuccessPayload,
  DeleteBillStartPayload,
  // AddBillsStartPayload,
} from "../actions/BillsActions";
// import { budget } from "src/utils/constants";

const initialState: BillsState = {
  loading: true,
  success: false,
  error: undefined,

  // bills: budget.bills,
  bills: [],
  selectedBillId: undefined,
  newBillId: undefined,
};

export const billsReducers: (
  state: BillsState | undefined,
  action: BillsAction
) => BillsState = (state = initialState, action) => {
  // console.log("INSIDE BILLS ALL REDUCERS");
  state = otherReducers(state, action);
  state = getReducers(state, action);
  state = addReducers(state, action);
  state = deleteBillReducers(state, action);
  state = getNewBillIdReducers(state, action);
  return state;
};

const otherReducers: (state: BillsState, action: BillsAction) => BillsState = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case BillsActionType.GetSelectedBillCard: {
      // const data = action.data as GetSelectedBillPayload;
      return {
        ...state,
        // selectedBillId: data.selectedBillId,
      };
    }
    case BillsActionType.SetSelectedBillCard: {
      const data = action.data as SetSelectedBillPayload;
      return {
        ...state,
        selectedBillId: data.selectedBillId,
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
  // console.log("INSIDE BILLS GET REDUCERS");
  switch (action.type) {
    case BillsActionType.GetBillsStart: {
      console.log("getReducers GetBillsStart");
      return { ...state, loading: true, success: false, error: undefined };
    }

    case BillsActionType.GetBillsSuccess: {
      console.log("getReducers GetBillsSuccess");
      const response = (action.data as GetBillsSuccessPayload).response;
      return {
        ...state,
        loading: false,
        success: true,
        error: undefined,
        bills: response.bills,
      };
    }

    case BillsActionType.BillsError: {
      console.log("getReducers BillsError");
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

const addReducers: (state: BillsState, action: BillsAction) => BillsState = (
  state = initialState,
  action
) => {
  // console.log("INSIDE BILLS ADD REDUCERS");
  switch (action.type) {
    case BillsActionType.AddBillsStart: {
      // const response = (action.data as AddBillsSuccessPayload);
      return {
        ...state,
        loading: true,
        success: false,
        error: undefined,
      };
    }

    case BillsActionType.AddBillsSuccess: {
      const bills = (action.data as AddBillsSuccessPayload).response.bills;
      // const currentBills = state.bills ? state.bills : [];
      // const newBills = [...currentBills, bill];
      const newBillId = state.newBillId ? state.newBillId + 1 : 1001;
      return {
        ...state,
        bills: bills,
        newBillId: newBillId,
        selectedBillId: undefined,
        loading: false,
        success: true,
        error: undefined,
      };
    }

    case BillsActionType.BillsError: {
      const data = action.data as BillsErrorPayload;
      return {
        ...state,
        loading: false,
        success: false,
        selectedBillId: undefined,
        error: data.error,
      };
    }

    default:
      return state;
  }
};

const deleteBillReducers: (
  state: BillsState,
  action: BillsAction
) => BillsState = (state = initialState, action) => {
  // console.log("INSIDE BILLS ADD REDUCERS");
  switch (action.type) {
    case BillsActionType.DeleteBillStart: {
      // const response = (action.data as DeleteBillStartPayload);
      return {
        ...state,
        loading: true,
        success: false,
        error: undefined,
      };
    }

    case BillsActionType.DeleteBillSuccess: {
      const bills = (action.data as DeleteBillSuccessPayload).response.bills;
      // const currentBills = state.bills ? state.bills : [];
      // const newBills = [...currentBills, bill];
      const newBillId = state.newBillId ? state.newBillId + 1 : 1001;
      return {
        ...state,
        bills: bills,
        newBillId: newBillId,
        selectedBillId: undefined,
        loading: false,
        success: true,
        error: undefined,
      };
    }

    case BillsActionType.BillsError: {
      const data = action.data as BillsErrorPayload;
      return {
        ...state,
        loading: false,
        success: false,
        selectedBillId: undefined,
        error: data.error,
      };
    }

    default:
      return state;
  }
};

const getNewBillIdReducers: (
  state: BillsState,
  action: BillsAction
) => BillsState = (state = initialState, action) => {
  // console.log("INSIDE NEW BILLS ID GET REDUCERS");

  switch (action.type) {
    case BillsActionType.GetNewBillIdStart: {
      return { ...state, loading: true, success: false, error: undefined };
    }

    case BillsActionType.GetNewBillIdSuccess: {
      const response = (action.data as GetNewBillIdSuccessPayload).response;
      return {
        ...state,
        loading: false,
        success: true,
        error: undefined,
        newBillId: response.newBillId,
      };
    }

    case BillsActionType.BillsError: {
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

// case BillsActionType.AddBillsStart: {
//   const bill = (action.data as AddBillsStartPayload).bill;
//   const currentBills = state.bills ? state.bills : [];
//   const newBills = [...currentBills, bill];
//   return {
//     ...state,
//     bills: newBills,
//     newBillId: state.newBillId + 1,
//     selectedBillId: undefined,
//     loading: true,
//     success: false,
//     error: undefined,
//   };
// }

// case BillsActionType.AddBillsSuccess: {
//   // const response = (action.data as AddBillsSuccessPayload);
//   return {
//     ...state,
//     loading: false,
//     success: true,
//     error: undefined,
//     // bills: response.bills,
//   };
// }
