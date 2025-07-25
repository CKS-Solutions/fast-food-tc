import { DatabaseProduct } from '../product.types';

export enum OrderStauts {
  CREATED = 'created',
  RECEIVED = 'received',
  IN_PREPARATION = 'in_preparation',
  READY = 'ready',
  FINISHED = 'finished',
  CANCELLED = 'cancelled',
}

export type DatabaseOrder = {
  id: string;
  customerId: string | null;
  paymentMethod: string;
  status: string;
  total: number;
  createdAt: Date;
  updatedAt: Date;
};

export type DatabaseOrderWithProducts = DatabaseOrder & {
  order_product: {
    product: DatabaseProduct;
    quantity: number;
  }[];
};
