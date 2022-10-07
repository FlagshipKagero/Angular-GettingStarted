import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductDetailGuard } from "./product-detail/product-detail.guard";

@NgModule({
  declarations: [
    //here consist of components related to products,
    //we decare components here instead of root as part of a feature
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    SharedModule,
    //RouterModule is imported forChild so that it does not register services more than once
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      {
        path: "products/:id",
        //add route guard to determine if this route can be activated
        //there can be more than 1 guard
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent,
      },
    ]),
  ],
})
export class ProductModule {}
