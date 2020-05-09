import { takeEvery, put } from "redux-saga/effects";
import {
  BillsActionType,
  BillsAction,
  BillsActions,
  // GetBillsStartPayload,
} from "src/modules/billList/stores/actions/BillsActions";
import BillsService from "src/modules/billList/services/BillsService";
import { GetBillsResponse } from "src/modules/billList/services/getBills/GetBillsResponse.data";

export function* getBillsWorker(action: BillsAction): IterableIterator<any> {
  // const site = (action.data as GetBillsStartPayload).site;
  console.log("inside getBillsWorker");
  try {
    //@ts-ignore
    const response: GetBillsResponse = yield BillsService.get();
    yield put(BillsActions.getBillsSuccess({ response }));
  } catch (error) {
    yield put(BillsActions.getBillsError({ error }));
  }
}

const billsWatcher = [
  takeEvery(BillsActionType.GetBillsStart, (action) =>
    getBillsWorker({
      type: action.type,
      data: (action as BillsAction).data,
    })
  ),
];

export default billsWatcher;
