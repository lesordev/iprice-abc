import { api } from '.';
import { OrderStatus } from './../types/index';

interface Props {
  id: number;
  status: OrderStatus;
}

export function useUpdateOrderStatus(callback?: () => void) {
  return ({ id, status }: Props) => {
    api
      .post(
        `/api/order/changestatus?id=${id}&status=${Object.values(
          OrderStatus
        ).findIndex((e) => e === status)}`
      )
      .finally(callback);
  };
}
