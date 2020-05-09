import { BillsState } from "src/modules/billList/stores/state/BillsState";
import { combineReducers } from "redux";
import { billsReducers } from "src/modules/billList/stores/reducers/BillsReducers";

/// <summary>
/// Member names in ApplicationState must match member names in rootReducers
/// </summary>
export interface ApplicationState {
  bills: BillsState;
}

/// <summary>
/// Member names in ApplicationState must match member names in rootReducers
/// </summary>
const rootReducers = combineReducers<ApplicationState>({
  // entity specific
  bills: billsReducers,
});

export default rootReducers;
