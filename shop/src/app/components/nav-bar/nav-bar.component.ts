import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  constructor(private cs: CartService) {}

  ngOnInit() {
  }

  get total() {
    return this.cs.totalItems;
  }

}
