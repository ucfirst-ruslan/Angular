import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  title = 'Home page sggdfgdfg dfg d fg';
  /* list = [
    'sdfsfsdf',
    'sdfsfsdf',
    'sdfsfsdf',
    'sdfsfsdf',
    'sdfsfsdf',
    'sdfsfsdf',
    'sdfsfsdf',
    'sdfsfsdf'
  ]; */

  constructor(protected products: ProductsService) { }

  ngOnInit() {
    this.title = 'asdfasdf';
  }

  get list() {
    return this.products.list;
  }

  public buy(id) {
    alert('BUY: ' + id);
  }

}
