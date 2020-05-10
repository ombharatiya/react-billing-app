import { Bills } from "../../../model/Bill";

export interface IBillListProps {
  bills: Bills | undefined;
  onRemoveBill: (id: number) => void;
  onEditBill: (id: number) => void;
}
