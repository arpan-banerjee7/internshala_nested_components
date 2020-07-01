import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-component-x",
  templateUrl: "./component-x.component.html",
  styleUrls: ["./component-x.component.css"],
})
export class ComponentXComponent implements OnInit {
  xData: string = "First x";
  component_y_arr = [];
  Ydata = [];
  @Input() xIndex: string;

  constructor() {}

  ngOnInit() {}

  onAdded(e: Event) {
    e.preventDefault();
    this.component_y_arr.push(2);
  }
}
