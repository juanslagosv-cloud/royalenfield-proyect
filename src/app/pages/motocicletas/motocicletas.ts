import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService, Product } from '../../services/products';





@Component({
  selector: 'app-motocicletas',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './motocicletas.html',
  styleUrls: ['./motocicletas.scss'],
})
export class MotocicletasComponent {
  motocicletas: Product[] = [];

  constructor(private productService: ProductsService) {
    this.motocicletas = this.productService.getProducts();
  }
}

