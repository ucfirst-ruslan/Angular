import { CartService } from './../../services/cart.service';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.sass']
})
export class CartItemComponent implements OnInit {
  @Input() id;
  @Output() test = new EventEmitter();
  @Input() test2;
  @Output() test2Change = new EventEmitter();
  constructor(private cs: CartService, private products: ProductsService, private router: Router) { }

  ngOnInit() {
  }

  get count() {
    return this.item.count;
  }

  set count(val) {
    this.cs.changeCount(this.id, +val);
    this.test.emit(val);
    this.test2Change.emit(val);
  }

  get item() {
    return this.cs.findProduct(this.id);
  }

  get total() {
    return this.count * this.product.price;
  }

  get product() {
    return this.products.getProductById(this.id);
  }

  public progNav() {
    this.router.navigate(['/product', this.id]);
  }

}
