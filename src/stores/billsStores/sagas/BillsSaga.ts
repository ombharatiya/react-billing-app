import { takeEvery, put } from "redux-saga/effects";
import {
  BillsActionType,
  BillsAction,
  BillsActions,
  AddBillsStartPayload,
  // GetBillsStartPayload,
} from "src/stores/billsStores/actions/BillsActions";
import BillsService from "src/services/billsServices/BillsService";
import { GetBillsResponse } from "src/services/billsServices/getBills/GetBillsResponse.data";
import { GetNewBillIdResponse } from "src/services/billsServices/getNewBillId/GetNewBillIdResponse.data";

export function* getBillsWorker(action: BillsAction): IterableIterator<any> {
  // const site = (action.data as GetBillsStartPayload).site;
  // console.log("inside getBillsWorker");
  try {
    //@ts-ignore
    const response: GetBillsResponse = yield BillsService.get();
    yield put(BillsActions.getBillsSuccess({ response }));
  } catch (error) {
    yield put(BillsActions.getBillsError({ error }));
  }
}

export function* getNewBillIdWorker(
  action: BillsAction
): IterableIterator<any> {
  // const site = (action.data as GetBillsStartPayload).site;
  console.log("inside getNewBillIdWorker");
  try {
    //@ts-ignore
    const response: GetNewBillIdResponse = yield BillsService.getNewBillId();
    yield put(BillsActions.getNewBillIdSuccess({ response }));
  } catch (error) {
    yield put(BillsActions.getBillsError({ error }));
  }
}

export function* addBillsWorker(action: BillsAction): IterableIterator<any> {
  const bill = (action.data as AddBillsStartPayload).bill;
  // console.log("inside addBillsWorker", bill);
  try {
    //@ts-ignore
    const response: GetBillsResponse = yield BillsService.post(bill);
    yield put(BillsActions.addBillsSuccess({ response }));
  } catch (error) {
    yield put(BillsActions.addBillsError({ error }));
  }
}

const billsWatcher = [
  takeEvery(BillsActionType.GetBillsStart, (action) =>
    getBillsWorker({
      type: action.type,
      data: (action as BillsAction).data,
    })
  ),
  takeEvery(BillsActionType.AddBillsStart, (action) =>
    addBillsWorker({
      type: action.type,
      data: (action as BillsAction).data,
    })
  ),
  takeEvery(BillsActionType.GetNewBillIdStart, (action) =>
    getNewBillIdWorker({
      type: action.type,
      data: (action as BillsAction).data,
    })
  ),
];

export default billsWatcher;
