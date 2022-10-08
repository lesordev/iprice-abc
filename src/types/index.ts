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
  id: number;
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
  status: OrderStatus;
  totalPrice?: number;
  customer: {
    id: number;
    fullName: string;
  };

  detail: OrderDetail[];
}

export interface User {
  username: string;
  password: string;
  fullName?: string;
  role: 'ADMIN' | 'PROVIDER' | 'USER';
}

export enum OrderStatus {
  Cancel = 'Cancel',
  New = 'New',
  GatheringAndPacking = 'Gathering and Packing',
  PackedAndDelivering = 'Packed and Delivering',
  Done = 'Done',
}

export interface OrderDetailResponse {
  orderDetailId: number;
  unitPrice: number;
  quantity: number;
  orderId: number;
  productproviderId: number;
  productName: string;
}

export interface OrderResponse {
  orderId: number;
  totalPrice: number;
  orderDate: string;
  paymentType: string;
  shippingStatus: OrderStatus;
  customerId: 1;
  customerName: string;
  orderDetailList: OrderDetailResponse[];
}
