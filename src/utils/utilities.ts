import { bills2, monthlyArrayObj, numToMonths, months } from "./constants";
import { Bills, Bill } from "src/model/Bill";
import { getReverseFormattedDate } from "src/modules/billForm/utils/billFormUtils";

export const initiateLocalStorageData = () => {
  localStorage.setItem("bills", JSON.stringify(bills2));
};

const MOD_MONTHS = 12;

// Group by time period - Commits by day | week | month | year
// ------------------------------------------------------------
var groupByTimePeriod = function (
  obj: any,
  timestamp: any,
  period: any,
  mod: any
) {
  var objPeriod: any = monthlyArrayObj;
  var oneDay: number = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  for (var i = 0; i < obj.length; i++) {
    var d: Date = new Date(getReverseFormattedDate(obj[i][timestamp]));
    var d2: number = 0;
    if (period === "day") {
      d2 = Math.floor(d.getTime() / oneDay);
    } else if (period === "week") {
      d2 = Math.floor(d.getTime() / (oneDay * 7));
    } else if (period === "month") {
      d2 = (d.getFullYear() - 1970) * 12 + d.getMonth();
    } else if (period === "year") {
      d2 = d.getFullYear();
    } else {
      console.log(
        "groupByTimePeriod: You have to set a period! day | week | month | year"
      );
    }
    // define object key
    objPeriod[d2 % mod] = objPeriod[d2 % mod] || [];
    objPeriod[d2 % mod].push(obj[i]);
  }
  return objPeriod;
};

export const getProcessedChartData = (billsArray: Bills | undefined) => {
  // console.log("billsArray", billsArray);
  var sumList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (billsArray === undefined) {
    // console.log("billsArray if undefined ", billsArray);
    return {
      data: sumList,
      labels: months,
    };
  }
  // const bills = billsArray !== undefined ? billsArray : [];
  var objPeriodMonth = groupByTimePeriod(
    billsArray,
    "date",
    "month",
    MOD_MONTHS
  );
  // console.log("objPeriodMonth", objPeriodMonth);
  var i = 0;
  for (i = 0; i < 12; i++) {
    sumList[i] = objPeriodMonth[i]
      .map((item: Bill) => item.amount)
      .reduce((prev: number, next: number) => prev + Math.round(next), 0);
  }
  const d = new Date();
  const monthNum = (d.getFullYear() - 1970) * 12 + d.getMonth();
  var monthIter = monthNum + 1;
  var monthArr = [];
  var monthSumArr = [];
  for (i = 0; i < 12; i++) {
    const num = monthIter % 12;
    // monthSumArr.push(sumList[num]);
    // monthArr.push(numToMonths[num]);
    monthSumArr.push(sumList[num]);
    monthArr.push(numToMonths[num]);
    monthIter += 1;
  }
  return {
    data: monthSumArr,
    labels: monthArr,
  };
};

// function getSum(total: number, num: number) {
//   return total + Math.round(num);
// }

// function amount(bill: Bill) {
//   return bill.amount;
// }

// function sum(prev, next){
//   return prev + next;
// }
// numbers.reduce(getSum, 0);
// function amount(item){
//   return item.Amount;
// }

// function sum(prev, next){
//   return prev + next;
// }

// traveler.map(amount).reduce(sum);
// // => 235;
