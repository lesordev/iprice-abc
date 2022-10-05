export interface Product {
  id: number;
  productName: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  status: boolean;
}

export interface OrderDetail {
  product: {
    id: number;
    name: string;
  };
  unitPrice: number;
  quantity: number;
}

export interface Order {
  id: number;
  orderDate: Date | string;
  paymentType: string;
  status: string;
  totalPrice?: number;
  customer: {
    id: number;
    fullName: string;
  };

  detail: OrderDetail[];
}
