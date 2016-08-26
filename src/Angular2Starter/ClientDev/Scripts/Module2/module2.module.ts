import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { Component2Component } from "./Components/component2.component";
import { Service2Service } from "./Services/service2.service";


@NgModule({
    imports: [BrowserModule],
    declarations: [Component2Component],
    exports: [Component2Component],
    providers: [Service2Service]
})
export class Module2Module { }