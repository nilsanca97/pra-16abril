import { Injectable, signal } from '@angular/core';
import { Pedido } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {

  pedidos: any = signal([]);

  constructor() {
    this.getPedidos();
  }

  getPedidos(): void {
    this.pedidos.set(JSON.parse(localStorage.getItem('pedidos') || '[]'));
  }

  setPedido(pedido: Pedido): void {
    const pedidos: Pedido[] = this.pedidos();
    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    this.getPedidos();
  }

}
