import { FileService } from "./file.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
  constructor(private fileService: FileService) {}
  hasValue: boolean = false;
  obj = {};
  saveYData = (
    xIndex: string,
    yIndex: string,
    xdata: string,
    ydata: string
  ) => {
    this.hasValue = true;
    if (!this.obj[xIndex]) this.obj[xIndex] = {};
    var entries = this.obj[xIndex];
    entries["data"] = xdata;
    entries[yIndex] = ydata;
    console.log(this.obj);
  };

  saveFinal = () => {
    var finalobj = {};

    for (const [key, value] of Object.entries(this.obj)) {
      var xkeys = "X" + key + "-" + value["data"];
      finalobj[xkeys] = [];
      for (const [k, v] of Object.entries(value)) {
        if (k != "data") {
          finalobj[xkeys].push(v);
        }
      }
    }
    console.log(JSON.stringify(finalobj));
    this.fileService.saveToFile(finalobj);

    console.log(finalobj);
  };
}
