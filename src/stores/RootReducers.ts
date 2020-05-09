import { BillsState } from "src/stores/billsStores/state/BillsState";
import { combineReducers } from "redux";
import { billsReducers } from "src/stores/billsStores/reducers/BillsReducers";

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
