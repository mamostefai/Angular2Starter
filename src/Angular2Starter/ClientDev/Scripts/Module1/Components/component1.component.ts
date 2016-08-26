import { Component, OnInit } from "@angular/core";
import { Service1Service } from "./../Services/service1.service";
import { Service2Service } from "./../../Module2/Services/service2.service";

@Component({
    selector: "starter-comp1",
    templateUrl: "templates/module1/component1.html",
    styleUrls: ["css/app/components/module1/component1.css"]
    
    
})
export class Component1Component implements OnInit {
    text: string;
    constructor(private _s1: Service1Service, private _s2: Service2Service) { }

    ngOnInit() {
        this.text = `${this._s1.getText()} ${this._s2.getText()}`;
    }
}