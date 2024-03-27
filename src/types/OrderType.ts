export interface OrderType {
  _id?: string;
  date: string;
  username: string;
  phone: string;
  order: {
    name: string;
    price: string;
    quantity: number;
  }[];
  total: string;
  status: string;
}
