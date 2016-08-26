import { Component, OnInit } from "@angular/core";
import { Service2Service } from "./../Services/service2.service";

@Component({
    selector: "starter-comp2",
    templateUrl: "templates/module2/component2.html",
    styleUrls: ["css/app/components/module2/component2.css"]


})
export class Component2Component implements OnInit {
    text: string;
    constructor(private _s2: Service2Service) { }

    ngOnInit() {
        this.text = this._s2.getText();
    }
}