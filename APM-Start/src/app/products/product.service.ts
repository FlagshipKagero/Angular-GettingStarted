import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  productsUrl: string = "api/products/products.json";

  constructor(private http: HttpClient) {}

  //hardtyping the return type to an observable of the correct type
  getProducts(): Observable<IProduct[]> {
    //hardcoded return values, we could get data from an external source/db
    // return [
    //   {
    //     productId: 2,
    //     productName: "Garden Cart",
    //     productCode: "GDN-0023",
    //     releaseDate: "March 18, 2022",
    //     description: "15 gallon capacity rolling garden Cart",
    //     price: 32.99,
    //     starRating: 4.2,
    //     imageUrl: "assets/images/garden_cart.png",
    //   },
    //   {
    //     productId: 5,
    //     productName: "Hammer",
    //     productCode: "TBX-0048",
    //     releaseDate: "May 21, 2022",
    //     description: "Curved claw steel hammer",
    //     price: 8.9,
    //     starRating: 4.8,
    //     imageUrl: "assets/images/hammer.png",
    //   },
    // ];

    return this.http.get<IProduct[]>(this.productsUrl).pipe(
      tap((data) => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(e: HttpErrorResponse) {
    //handle error logging
    let errorMsg = "";

    if (e.error instanceof ErrorEvent) {
      errorMsg = `An error occurred: ${e.error.message}`;
    } else {
      errorMsg = `Server returned code: ${e.status}, error message is: ${e.message}`;
    }

    //console.log(errorMsg)
    return throwError(errorMsg);
  }
}
