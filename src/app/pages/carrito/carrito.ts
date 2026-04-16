import { Component, inject } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { ListadoPedidos } from '../../shared/components/listado-pedidos/listado-pedidos';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-carrito',
  imports: [ListadoPedidos, RouterLink],
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss',
})
export class Carrito {

  authService = inject(AuthService);
  router = inject(Router);

  pedidoService = inject(PedidoService);

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

}
