<<<<<<< HEAD
import { Component, computed, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductData } from '../product-data';
import { Product } from '../product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-selection',
  imports: [FormsModule, CurrencyPipe],
=======
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-selection',
  imports: [FormsModule],
>>>>>>> 7172d07a21c5ce780511b386f3f6bc146a1ffeba
  templateUrl: './product-selection.html',
  styleUrl: './product-selection.css'
})
export class ProductSelection {
<<<<<<< HEAD
  pageTitle = 'Product Selection';  
  products = signal(ProductData.products);
  selectedProduct = signal<Product | undefined>(undefined);
  quantity = linkedSignal({
    source:this.selectedProduct,
    computation: p => 1
  });
  total = computed(() => (this.selectedProduct()?.price ?? 0) * this.quantity());
  color = computed(() => this.total() > 200 ? 'green' : 'blue');
  onDecrease() {
    this.quantity.update(q => q <= 0 ? 0 : q - 1);
  }
  onIncrease() {
    this.quantity.update(q => q + 1);
  }
=======
  pageTitle = 'Product Selection';
  quantity = signal(1);
>>>>>>> 7172d07a21c5ce780511b386f3f6bc146a1ffeba
}
