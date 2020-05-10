import { ServiceType } from "./ServiceType.data";
import { Bill } from "src/model/Bill";

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

  public postBill<T = void>(bill: Bill): T {
    const jsonData = localStorage.getItem(this.serviceType);
    var data: any = [];
    if (jsonData !== undefined && jsonData !== null) {
      data = JSON.parse(jsonData);
    }
    const newData: any = [...data, bill];
    localStorage.setItem(this.serviceType, JSON.stringify(newData));

    if (localStorage.getItem("billId") === null) {
      localStorage.setItem("billId", "1000");
    }
    const billId = localStorage.getItem("billId");
    const newBillId = Number(billId);
    localStorage.setItem("billId", String(newBillId + 1));
    return { bills: newData } as any;
  }

  public editBill<T = void>(updatedBill: Bill): T {
    const jsonData = localStorage.getItem(this.serviceType);
    var data: any = [];
    if (jsonData !== undefined && jsonData !== null) {
      data = JSON.parse(jsonData);
    }
    const filteredData = data.filter(
      (bill: Bill) => bill.id !== updatedBill.id
    );
    const newData: any = [...filteredData, updatedBill];
    localStorage.setItem(this.serviceType, JSON.stringify(newData));
    return { bills: newData } as any;
  }

  public deleteBill<T = void>(id: number): T {
    const jsonData = localStorage.getItem(this.serviceType);
    var data: any = [];
    if (jsonData !== undefined && jsonData !== null) {
      data = JSON.parse(jsonData);
    }
    const newData = data.filter((bill: Bill) => bill.id !== id);
    localStorage.setItem(this.serviceType, JSON.stringify(newData));
    return { bills: newData } as any;
  }

  public getNewBillId<T = void>(): T {
    if (localStorage.getItem("billId") === null) {
      localStorage.setItem("billId", "1010");
    }
    const billId = localStorage.getItem("billId");
    const newBillId = Number(billId);
    return { newBillId } as any;
  }
}
