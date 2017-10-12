import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  // Recibimos data del componente padre (AppComponent)
  @Input() productList: Product[];

  // El Output decorator nos ayuda a exponer una propiedad de un componente y recibirlo en su padre.
  // La manera en que trabaja un EventEmitter son 3 pasos: Crear un output property, Crear una instancia de EventEmitter, Finalmente emitir
  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    // el output property (onProductSelected) emite un producto clickeado, el cual será tomado por el padre AppComponent
    this.onProductSelected.emit(product);
    console.log(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {}

}
