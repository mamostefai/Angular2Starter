"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var service2_service_1 = require("./../Services/service2.service");
var Component2Component = (function () {
    function Component2Component(_s2) {
        this._s2 = _s2;
    }
    Component2Component.prototype.ngOnInit = function () {
        this.text = this._s2.getText();
    };
    Component2Component = __decorate([
        core_1.Component({
            selector: "starter-comp2",
            templateUrl: "templates/module2/component2.html",
            styleUrls: ["css/app/components/module2/component2.css"]
        }), 
        __metadata('design:paramtypes', [service2_service_1.Service2Service])
    ], Component2Component);
    return Component2Component;
}());
exports.Component2Component = Component2Component;
//# sourceMappingURL=component2.component.js.map