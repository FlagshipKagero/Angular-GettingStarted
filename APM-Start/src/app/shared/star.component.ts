import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"],
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 4; //retrieve data from parent component
  starWidth: Number = 100;
  @Output() notification: EventEmitter<string> = new EventEmitter<string>(); //inform and transmit to parent component that there is data

  onClick() {
    this.notification.emit(`The rating ${this.rating} was clicked!`);
  }

  ngOnChanges() {
    this.starWidth = (this.rating * 75) / 5;
  }
}
