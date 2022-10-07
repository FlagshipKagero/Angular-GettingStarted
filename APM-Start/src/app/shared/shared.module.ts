import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StarComponent } from "./star.component";
import { FormsModule } from "@angular/forms";
import { ConvertToSpacesPipe } from "./convert-to-spaces";

@NgModule({
  declarations: [StarComponent, ConvertToSpacesPipe],
  imports: [CommonModule, FormsModule],
  exports: [ConvertToSpacesPipe, StarComponent, CommonModule, FormsModule],
})
export class SharedModule {}
