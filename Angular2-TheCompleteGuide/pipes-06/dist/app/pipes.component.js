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
var core_1 = require('@angular/core');
var double_pipe_1 = require("./double.pipe");
var filter_pipe_1 = require("./filter.pipe");
var PipesAppComponent = (function () {
    function PipesAppComponent() {
        this.myValue = 'lowercase';
        this.myDate = new Date(2016, 5, 24);
        this.values = ['Milk', 'Bread', 'Beans'];
        this.asyncValue = new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve('Data is here!'); }, 2000);
        });
    }
    PipesAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pipes-app',
            templateUrl: 'pipes.component.html',
            styles: ["\n    .pipes {\n      margin: 32px;\n      padding: 32px;\n    }\n  "],
            pipes: [double_pipe_1.DoublePipe, filter_pipe_1.FilterPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], PipesAppComponent);
    return PipesAppComponent;
}());
exports.PipesAppComponent = PipesAppComponent;
//# sourceMappingURL=../../app/pipes.component.js.map