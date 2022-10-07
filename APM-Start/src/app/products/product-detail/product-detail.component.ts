import { Component, OnInit } from "@angular/core";
import { IProduct } from "../product";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = "Product Details";
  product: IProduct = {} as IProduct;
  errorMessage = "";

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.route.snapshot.paramMap.get("id"));
  }

  OnBack() {
    this.router.navigate(["/products"]);
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.pageTitle += `: ${id ? +id : ""}`;

    //get the product details
    this.product = {
      productId: 1,
      productName: "Leaf Rake",
      productCode: "GDN-0011",
      releaseDate: "March 19, 2021",
      description: "Leaf rake with 48-inch wooden handle.",
      price: 19.95,
      starRating: 3.2,
      imageUrl: "assets/images/leaf_rake.png",
    };
  }
}
