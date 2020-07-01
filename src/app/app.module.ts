import { FileService } from "./services/file.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ComponentXComponent } from "./component-x/component-x.component";
import { ComponentYComponent } from "./component-x/component-y/component-y.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DataService } from "./services/data.service";

@NgModule({
  declarations: [AppComponent, ComponentXComponent, ComponentYComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [DataService, FileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
