import { ServiceType } from "./ServiceType.data";

export default class ApiService {
  protected readonly serviceType: ServiceType;

  public constructor(serviceType: ServiceType) {
    this.serviceType = serviceType;
  }

  public get<T = void>(): T {
    const jsonData = localStorage.getItem(this.serviceType);
    const data: any = { bills: jsonData != null ? JSON.parse(jsonData) : [] };
    return data;
  }
}
