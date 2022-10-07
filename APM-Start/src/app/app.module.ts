import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ProductModule } from "./products/product.module";

import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./home/pagenotfound.component";
import { WelcomeComponent } from "./home/welcome.component";

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    //feature/shared modules should be above because
    //they may contain routing, which cannot be below the wildcard route
    ProductModule,
    //wildcard route should always be at the bottom
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "", component: WelcomeComponent, pathMatch: "full" },
      { path: "**", component: PageNotFoundComponent },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
