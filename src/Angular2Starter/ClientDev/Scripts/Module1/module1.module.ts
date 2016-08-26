import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./Components/app.component";
import { Component1Component } from "./Components/component1.component";
import { Service1Service } from "./Services/service1.service";
import { Module2Module } from "./../Module2/module2.module";

@NgModule({
    imports: [BrowserModule, Module2Module],
    declarations: [AppComponent, Component1Component],
    bootstrap: [AppComponent],
    providers: [Service1Service]
})
export class Module1Module { }