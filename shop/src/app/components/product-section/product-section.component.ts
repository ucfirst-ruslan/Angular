import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.sass']
})
export class ProductSectionComponent implements OnInit, OnDestroy {
  public id: number;
  private $sub: any;
  constructor(private route: ActivatedRoute, private products: ProductsService) { }

  ngOnInit() {
    this.$sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
   });
  }

  ngOnDestroy() {
    this.$sub.unsubscribe();
  }

  get product() {
    return this.products.getProductById(this.id);
  }

}
