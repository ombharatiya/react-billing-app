import { ServiceType } from "src/services/ServiceType.data";
import ApiService from "src/services/ApiService";
import { GetBillsResponse } from "./getBills/GetBillsResponse.data";
import { Bill } from "src/model/Bill";
import { GetNewBillIdResponse } from "./getNewBillId/GetNewBillIdResponse.data";

const serviceType = ServiceType.Bills;

export class BillsService {
  private readonly service: ApiService = new ApiService(serviceType);

  public get(): GetBillsResponse {
    return this.service.get<GetBillsResponse>();
  }

  public post(bill: Bill): GetBillsResponse {
    return this.service.postBill<GetBillsResponse>(bill);
  }

  public edit(bill: Bill): GetBillsResponse {
    return this.service.editBill<GetBillsResponse>(bill);
  }

  public deleteBill(id: number): GetBillsResponse {
    return this.service.deleteBill<GetBillsResponse>(id);
  }

  public getNewBillId(): GetNewBillIdResponse {
    return this.service.getNewBillId<GetNewBillIdResponse>();
  }
}

const billsService = new BillsService();
export default billsService;
