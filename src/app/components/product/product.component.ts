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
  filteredData:[] = [];

  ngOnInit(): void {
    console.log('... product component is initialized');
    
    this.route.queryParams
      .subscribe(params => {
        this.param = params.query;
      }
    );

    this.productService.getSearchedProduct(this.param).subscribe((data) => {
      console.log('-- data in ProductComponent ..');
      console.log(data);

      this.filteredData = data.results;

    })
  }

  val: number = 1;

}
