import { all } from "redux-saga/effects";
import billsWatcher from "./modules/billList/stores/sagas/BillsSaga";

export default function* sagas() {
  yield all([...billsWatcher]);
}
