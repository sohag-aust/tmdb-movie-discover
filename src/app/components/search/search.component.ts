import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'search-product',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit(): void {
    this.getData();
  }

  productData: [] = [];
  searchedData: any;

  sendData(event: any) {

    console.log(event.target.value);
    const query = event.target.value;
    this.searchedData = [];

    this.searchedData = this.productData.filter( (product) => {
      const s = String ( product['name']);
      console.log('sss' , s);
      
      if(s) {
        console.log(`s2: ${s}`);

        const substr = s.substring(0, query.length);
        console.log(`substr : ${substr}, query: ${query}`);

        if(query && (substr.toLowerCase() === query.toLowerCase()) ) {
          console.log(`s3: ${s}`);
          return s;
        }
      }

    });
    console.log(`searched data `);
    console.log(this.searchedData);
    
  }

  getData(){
    this.productService.getProductsData().subscribe((data)=>{
      console.log(data);


      this.productData = data.results;
      console.log('product data ... ');
      console.log(this.productData);
    })
  }

  searchedProducts: [] = [];

  myClickFunction(event: any) {
    console.log('event in myClickFunction ..');
    const value = event.target.childNodes[0].nodeValue;
    console.log(value);
    

    // this.router.navigateByUrl('/product');
    this.router.navigate(['/product'], { queryParams: { query: value } });
    
  }

}
