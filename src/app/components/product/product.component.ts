import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  param: string;
  filteredData: [] = [];

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.param = params.query;
      }
    );

    this.productService.getSearchedProduct(this.param).subscribe((data) => {
      this.filteredData = data.results;
    });
  }
}
