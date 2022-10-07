import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  productListTitle = "Products List";
  products: IProduct[] = []; //apparently we must declare as any or it will be assumed to be type never?
  imageWidth = "50";
  imageMargin = "2";
  showImage = false; //hide images by default
  //   filterKeyword = ""; //obsolete
  errorMessage = ""; //holds error messages

  filteredProducts: IProduct[] = []; //holds the filtered products
  _listFilter: string = ""; //private var for keyword filter
  //getter & setter for listFilter
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    //while setting the listFilter (this means the keyword is being changed), filter the products
    this.filteredProducts = this.listFilter
      ? this.PerformFilter(this.listFilter)
      : this.products;
  }

  constructor(private productService: ProductService) {
    this.listFilter = "";
  }

  ngOnInit(): void {
    //on init fill products from productService.getProducts() endpoint
    //this.products = this.productService.getProducts()
    //do a subscription instead
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        //default filtered products list after retrieving products from service, after this, will update on filter keyword change
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  getTitle() {
    return this.productListTitle;
  }

  ToggleImage() {
    this.showImage = !this.showImage; //toggle between show and hide
  }

  //filter products function
  PerformFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase(); //convert to lower case for comparison

    //if index is not -1, keyword exist in this product. filter for each product
    return this.products.filter((product: IProduct) => {
      return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
    });
  }

  OnRatingClicked(message: any) {
    this.productListTitle = message;
  }
}
