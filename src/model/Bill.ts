export interface Bill {
  id: number;
  description: string;
  category: string;
  amount: number;
  date: string;
}

export type Bills = Bill[];