import { Component, OnInit } from '@angular/core';
import { ProductClass } from '../product-class';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';  

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  productModel! : ProductClass;  
  constructor(private _productServiceService: ProductServiceService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {  
    //var id = parseInt(this.route.snapshot.paramMap.get('id'));  
    var name = parseInt(localStorage.getItem('name') || '{}');  
    this._productServiceService.getProduct(name).subscribe(data => this.productModel = data);   
  }  

  gotoProductList(){  
    this.router.navigate(['/productList']);   
  } 

}
