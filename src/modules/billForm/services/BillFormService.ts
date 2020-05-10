import { ServiceType } from "src/services/ServiceType.data";
import ApiService from "src/services/ApiService";
import { GetBillsResponse } from "./getBills/GetBillsResponse.data";

const serviceType = ServiceType.Bills;

export class BillsService {
  private readonly service: ApiService = new ApiService(serviceType);

  public get(): GetBillsResponse {
    return this.service.get<GetBillsResponse>();
  }
}

const billsService = new BillsService();
export default billsService;
