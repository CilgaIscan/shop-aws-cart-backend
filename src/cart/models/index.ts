export type Product = {
  id: string,
  title: string,
  description: string,
  price: number,
};


export type CartItem = {
  id?: string,
  product: Product,
  count: number,
  cartId: string,
}

export enum CartStatus {
  OPEN = 'OPEN',
  ORDERED = 'ORDERED',
}

export type Cart = {
  id: string,
  items: CartItem[],
  status: CartStatus,
}
