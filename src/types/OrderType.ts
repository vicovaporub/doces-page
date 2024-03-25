export interface OrderType {
  _id?: string;
  username: string;
  phone: string;
  order: [
    {
      productName: string;
      price: number;
      quantity: number;
    }
  ];
  total: number;
}
