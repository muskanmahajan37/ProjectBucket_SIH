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
var http_1 = require('@angular/http');
var backendUrl_service_1 = require('../backendUrl.service');
var cookiesService_service_1 = require('../cookie/cookiesService.service');
require('rxjs/add/operator/toPromise');
var UserProfileService = (function () {
    function UserProfileService(http, cookiesService) {
        this.http = http;
        this.cookiesService = cookiesService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers.append('auth_token', this.cookiesService.getSessionId());
        console.log(this.headers);
    }
    UserProfileService.prototype.userProfile = function (username) {
        this.url = backendUrl_service_1.BackendUrlService.url + '/user/profile/' + username;
        return this.http
            .get(this.url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserProfileService.prototype.getQuestions = function (username) {
        this.url = backendUrl_service_1.BackendUrlService.url + '/questions/allquestions/' + username;
        return this.http
            .get(this.url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserProfileService.prototype.getProjects = function (username) {
        this.url = backendUrl_service_1.BackendUrlService.url + '/projects/user/' + username;
        return this.http
            .get(this.url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserProfileService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    UserProfileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, cookiesService_service_1.CookiesService])
    ], UserProfileService);
    return UserProfileService;
}());
exports.UserProfileService = UserProfileService;
"";
//# sourceMappingURL=userProfile.service.js.map