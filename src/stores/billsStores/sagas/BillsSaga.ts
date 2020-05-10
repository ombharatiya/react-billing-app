import { takeEvery, put } from "redux-saga/effects";
import {
  BillsActionType,
  BillsAction,
  BillsActions,
  AddBillsStartPayload,
  DeleteBillStartPayload,
  EditBillsStartPayload,
} from "src/stores/billsStores/actions/BillsActions";
import BillsService from "src/services/billsServices/BillsService";
import { GetBillsResponse } from "src/services/billsServices/getBills/GetBillsResponse.data";
import { GetNewBillIdResponse } from "src/services/billsServices/getNewBillId/GetNewBillIdResponse.data";

export function* getBillsWorker(action: BillsAction): IterableIterator<any> {
  // const site = (action.data as GetBillsStartPayload).site;
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
  try {
    //@ts-ignore
    const response: GetBillsResponse = yield BillsService.post(bill);
    yield put(BillsActions.addBillsSuccess({ response }));
  } catch (error) {
    yield put(BillsActions.addBillsError({ error }));
  }
}

export function* editBillsWorker(action: BillsAction): IterableIterator<any> {
  const bill = (action.data as EditBillsStartPayload).bill;
  try {
    //@ts-ignore
    const response: GetBillsResponse = yield BillsService.edit(bill);
    yield put(BillsActions.editBillsSuccess({ response }));
  } catch (error) {
    yield put(BillsActions.editBillsError({ error }));
  }
}

export function* deleteBillWorker(action: BillsAction): IterableIterator<any> {
  const id = (action.data as DeleteBillStartPayload).id;
  try {
    //@ts-ignore
    const response: GetBillsResponse = yield BillsService.deleteBill(id);
    yield put(BillsActions.deleteBillSuccess({ response }));
  } catch (error) {
    yield put(BillsActions.deleteBillError({ error }));
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
  takeEvery(BillsActionType.EditBillsStart, (action) =>
    editBillsWorker({
      type: action.type,
      data: (action as BillsAction).data,
    })
  ),
  takeEvery(BillsActionType.DeleteBillStart, (action) =>
    deleteBillWorker({
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
