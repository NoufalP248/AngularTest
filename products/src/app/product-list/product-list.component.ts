import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router, Route } from '@angular/router'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: any[] = [];
  constructor(private _productService: ProductServiceService, private router : Router) { }

  getAllProducts(){  
    this._productService.getAllProducts().subscribe(  
      data => this.products = data,  
      error => console.log('Error in getting product list'),  
        () => {console.log('success to update product list...');  
      });   
  }  

  ngOnInit() {    
    console.log("ngOnInit method calling..");  
    this.getAllProducts();  
  }  
  
  productDetails(name)  
   {  
    this.router.navigate(['/studentDetails', name]);   
   }

}
