import { bills2 } from "./constants";

export const initiateLocalStorageData = () => {
  localStorage.setItem("bills", JSON.stringify(bills2));
};
