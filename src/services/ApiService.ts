import { ServiceType } from "./ServiceType.data";
import { Bill } from "src/model/Bill";

export default class ApiService {
  protected readonly serviceType: ServiceType;

  public constructor(serviceType: ServiceType) {
    this.serviceType = serviceType;
  }

  public get<T = void>(): T {
    // console.log("inside ApiService get this.serviceType", this.serviceType);
    const jsonData = localStorage.getItem(this.serviceType);
    // console.log("inside ApiService get jsonData", jsonData);
    const data: any = { bills: jsonData != null ? JSON.parse(jsonData) : [] };
    // console.log("inside ApiService get data", data);

    return data;
  }

  public postBill<T = void>(bill: Bill): T {
    // console.log("inside ApiService post", bill);
    // console.log("inside ApiService this.serviceType", this.serviceType);
    const jsonData = localStorage.getItem(this.serviceType);
    // console.log("inside ApiService post jsonData", jsonData);
    var data: any = [];
    if (jsonData !== undefined && jsonData !== null) {
      // console.log("inside ApiService post if jsonData", jsonData);
      data = JSON.parse(jsonData);
    }
    // const data: any = jsonData ? JSON.parse(jsonData) : [];
    // console.log("inside ApiService post data", data);
    const newData: any = [...data, bill];
    // console.log("inside ApiService post newData", newData);
    localStorage.setItem(this.serviceType, JSON.stringify(newData));

    if (localStorage.getItem("billId") === null) {
      localStorage.setItem("billId", "1002");
    }
    const billId = localStorage.getItem("billId");
    const newBillId = Number(billId);
    localStorage.setItem("billId", String(newBillId + 1));
    return { bills: newData } as any;
  }

  public deleteBill<T = void>(id: number): T {
    const jsonData = localStorage.getItem(this.serviceType);
    var data: any = [];
    if (jsonData !== undefined && jsonData !== null) {
      // console.log("inside ApiService post if jsonData", jsonData);
      data = JSON.parse(jsonData);
    }
    const newData = data.filter((bill: Bill) => bill.id !== id);
    localStorage.setItem(this.serviceType, JSON.stringify(newData));
    return { bills: newData } as any;
  }

  public getNewBillId<T = void>(): T {
    console.log("###############getNewBillId");
    if (localStorage.getItem("billId") === null) {
      localStorage.setItem("billId", "1010");
    }
    const billId = localStorage.getItem("billId");
    const newBillId = Number(billId);
    return { newBillId } as any;
  }
}

// public getNewBillId<T = void>(): T {
//   var newBillId = 1000;
//   if (localStorage.getItem("billId") === null) {
//     localStorage.setItem("billId", "1000");
//   }
//   const billId = localStorage.getItem("billId");
//   // if (billId !== undefined && billId !== null) {
//   //   // console.log("inside ApiService post if jsonData", jsonData);
//   //   newBillId = Number(billId);
//   // }
//   return { newBillId } as any;
// }

// public postBill<T = void>(bill: Bill): T {
//   // console.log("inside ApiService post", bill);
//   // console.log("inside ApiService this.serviceType", this.serviceType);
//   const jsonData = localStorage.getItem(this.serviceType);
//   // console.log("inside ApiService post jsonData", jsonData);
//   var data: any = [];
//   if (jsonData !== undefined && jsonData !== null) {
//     // console.log("inside ApiService post if jsonData", jsonData);
//     data = JSON.parse(jsonData);
//   }
//   // const data: any = jsonData ? JSON.parse(jsonData) : [];
//   // console.log("inside ApiService post data", data);
//   const newData: any = [...data, bill];
//   // console.log("inside ApiService post newData", newData);
//   localStorage.setItem(this.serviceType, JSON.stringify(newData));

//   var newBillId = 1000;
//   const billId = localStorage.getItem("billId");
//   if (billId !== undefined && billId !== null) {
//     // console.log("inside ApiService post if jsonData", jsonData);
//     newBillId = Number(billId);
//   }
//   localStorage.setItem("billId", String(newBillId + 1));
//   return { bills: newData } as any;
// }
