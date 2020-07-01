import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-component-y",
  templateUrl: "./component-y.component.html",
  styleUrls: ["./component-y.component.css"],
})
export class ComponentYComponent implements OnInit {
  ydata: string = "Initial Data";
  constructor(private dataServ: DataService) {}

  @Input() yIndex: string;
  @Input() xIndex: string;
  @Input() xData: string;

  ngOnInit() {
    console.log(this.xIndex, this.yIndex);
  }

  onSave() {
    this.dataServ.saveYData(this.xIndex, this.yIndex, this.xData, this.ydata);
  }
}
