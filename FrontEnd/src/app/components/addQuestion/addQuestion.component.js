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
var _ = require("lodash");
var AddQuestionComponent = (function () {
    function AddQuestionComponent() {
        this.tags = [];
    }
    AddQuestionComponent.prototype.addTag = function () {
        if (this.tag.length != 0) {
            this.tag = this.tag.toLowerCase();
            for (var i in this.tags) {
                if (this.tags[i] === this.tag)
                    return;
            }
            this.tags.push(this.tag);
            this.tag = "";
        }
    };
    AddQuestionComponent.prototype.removeTag = function (tag) {
        _.remove(this.tags, function (n) {
            return n === tag;
        });
    };
    AddQuestionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-question',
            templateUrl: './addQuestion.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AddQuestionComponent);
    return AddQuestionComponent;
}());
exports.AddQuestionComponent = AddQuestionComponent;
//# sourceMappingURL=addQuestion.component.js.map