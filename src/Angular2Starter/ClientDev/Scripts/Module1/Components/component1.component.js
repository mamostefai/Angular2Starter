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
var service1_service_1 = require("./../Services/service1.service");
var service2_service_1 = require("./../../Module2/Services/service2.service");
var Component1Component = (function () {
    function Component1Component(_s1, _s2) {
        this._s1 = _s1;
        this._s2 = _s2;
    }
    Component1Component.prototype.ngOnInit = function () {
        this.text = this._s1.getText() + " " + this._s2.getText();
    };
    Component1Component = __decorate([
        core_1.Component({
            selector: "starter-comp1",
            templateUrl: "templates/module1/component1.html",
            styleUrls: ["css/app/components/module1/component1.css"]
        }), 
        __metadata('design:paramtypes', [service1_service_1.Service1Service, service2_service_1.Service2Service])
    ], Component1Component);
    return Component1Component;
}());
exports.Component1Component = Component1Component;
//# sourceMappingURL=component1.component.js.map