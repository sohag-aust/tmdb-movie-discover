import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) {

  }

  productData: any = [];
  searchedData: any;
  searchedProducts: any = [];

  ngOnInit(): void {
    this.getData();
  }

  sendData(event: any) {
    const query = event.target.value;
    this.searchedData = [];

    this.searchedData = this.productData.filter( (product) => {
      const title = 'title';
      const s = product[title];

      if (s) {
        const substr = s.substring(0, query.length);

        if (query && query.length >= 3 && (substr.toLowerCase() === query.toLowerCase()) ) {
          return s;
        }
      }
    });
  }

  getData(){
    this.productService.getProductsData().subscribe( (data) => {
      this.productData = data.results;
    });
  }

  myClickFunction(event: any) {
    const value = event.target.childNodes[0].nodeValue;
    this.router.navigate(['/product'], { queryParams: { query: value } });
  }
}
