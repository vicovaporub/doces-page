export interface OrderType {
  _id?: string;
  username: string;
  phone: string;
  order: {
    name: string;
    price: string;
    quantity: number;
  }[];
  total: string;
}
