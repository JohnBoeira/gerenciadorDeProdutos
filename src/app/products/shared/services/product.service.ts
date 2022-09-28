import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap} from "rxjs";
import { IProduct } from "../model/product.model";

@Injectable({
    providedIn: "root",
})
export class ProductService{

    private productUrl: string = "api/products/products.json"

    constructor(private http: HttpClient) { }

    public getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ', JSON.stringify(data)))
        );
    }

    getProduct(id: number): Observable<IProduct | undefined> {
        return this.getProducts()
          .pipe(
            map((products: IProduct[]) => products.find(p => p.productId === id))
          );
      }

}