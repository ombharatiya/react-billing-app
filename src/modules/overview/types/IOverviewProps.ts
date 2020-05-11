import { Bills } from "../../../model/Bill";

export interface IOverviewProps {
  bills: Bills | undefined;
  chartData: any;
  chartLabels: any;
  onRemoveBill: (id: number) => void;
  onEditBill: (id: number) => void;
  onCreateNewBill: () => void;
}
