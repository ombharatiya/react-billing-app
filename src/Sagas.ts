import { all } from "redux-saga/effects";
import billsWatcher from "./stores/billsStores/sagas/BillsSaga";

export default function* sagas() {
  yield all([...billsWatcher]);
}
