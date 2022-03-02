import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';    
import { Observable } from 'rxjs';  
import { ProductListClass } from './product-list-class';  

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  _url = 'http://localhost:44382/Api/GatewayApi/';

  constructor(private _http: HttpClient) { }

  getAllProducts(): Observable<any[]> {    
    return this._http.get<any[]>(this._url+'GetAllProductDetails');    
  }  
  getProduct(id: number): Observable<any> {    
    return this._http.get<any[]>(this._url+'ProductListWithName?id=' + id);    
  } 
}
