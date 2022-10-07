import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let id = +next.url[1].path;
    if (isNaN(id) || id < 1) {
      //id is not a number or smaller than 1, not valid
      alert("Invalid product Id");
      this.router.navigate(["/products"]); //return to products page

      return false; //do not proceed
    }

    return true; //proceed to page if correct
  }
}
