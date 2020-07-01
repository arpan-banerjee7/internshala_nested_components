import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class FileService {
  constructor(private httpClient: HttpClient) {}
  fileObj = {
    a: "arpan",
    b: {
      x1: 12,
      x2: 23,
    },
  };
  saveToFile(finalobj: Object) {
    this.httpClient
      .post("http://localhost:3000/api/fileData", finalobj)
      .subscribe();
  }
}
