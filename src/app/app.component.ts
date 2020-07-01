import { Component } from "@angular/core";
import { DataService } from "./services/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "DynamicTabComponents";
  componenet_x_Arr = [];

  constructor(private dataserv: DataService) {}
  onComponentAdded() {
    this.componenet_x_Arr.push(1);
  }
  save = () => {
    this.dataserv.saveFinal();
  };
}
