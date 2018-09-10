import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-buy-btn',
  templateUrl: './buy-btn.component.html',
  styleUrls: ['./buy-btn.component.sass']
})
export class BuyBtnComponent implements OnInit {
  @Input() id;
  constructor(private cart: CartService) { }

  ngOnInit() {
  }

  public buy() {
    this.cart.add(this.id);
  }
}
