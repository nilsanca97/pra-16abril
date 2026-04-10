export interface Pedido {
  nombre: string;
  precio: number;
  fecha: Date;
  stock: boolean;
  descripcion?: string;
  cantidad?: number;
}

export interface User {
  username: string;
  name: string;
  email: string;
}