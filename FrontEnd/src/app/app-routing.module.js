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
var router_1 = require('@angular/router');
var addProject_component_1 = require('./components/addProject/addProject.component');
var addQuestion_component_1 = require('./components/addQuestion/addQuestion.component');
var projectsFeed_component_1 = require('./components/projectsFeed/projectsFeed.component');
var userProfile_component_1 = require('./components/userProfile/userProfile.component ');
var editProfile_component_1 = require('./components/editProfile/editProfile.component');
var editProject_component_1 = require('./components/editProject/editProject.component');
var forum_component_1 = require('./components/forum/forum.component');
var projectview_component_1 = require('./components/projectView/projectview.component');
var signin_component_1 = require('./components/signin/signin.component');
var questionview_component_1 = require('./components/questionView/questionview.component');
var homePage_component_1 = require('./components/institute/homePage/homePage.component');
var instituteProfile_component_1 = require('./components/institute/instituteProfile/instituteProfile.component');
var adminPanel_component_1 = require('./components/adminPanel/adminPanel.component');
var editQuestion_component_1 = require('./components/editQuestion/editQuestion.component');
var logged_in_guard_1 = require('./logged-in.guard');
var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
        canActivate: [logged_in_guard_1.LoggedInGuard]
    },
    {
        path: 'home',
        component: homePage_component_1.InstituteHomePageComponent
    },
    // old Routings
    {
        path: 'projects-feed',
        component: projectsFeed_component_1.ProjectsFeedComponent
    },
    {
        path: 'add-project',
        component: addProject_component_1.AddProjectComponent
    },
    {
        path: 'add-question',
        component: addQuestion_component_1.AddQuestionComponent
    },
    {
        path: 'user-profile/:username',
        component: userProfile_component_1.UserProfileComponent
    },
    {
        path: 'forum',
        component: forum_component_1.ForumComponent
    },
    {
        path: 'projects/:id/:title',
        component: projectview_component_1.ProjectViewComponent
    },
    {
        path: 'edit-profile',
        component: editProfile_component_1.EditProfileComponent
    },
    {
        path: 'login',
        component: signin_component_1.SigninComponent
    },
    {
        path: 'projects/update/:id/:title',
        component: editProject_component_1.EditProjectComponent
    },
    {
        path: 'questions/:id/:title',
        component: questionview_component_1.QuestionViewComponent
    },
    {
        path: 'admin-panel',
        component: adminPanel_component_1.AdminPanelComponent
    },
    {
        path: 'questions/update/:id/:title',
        component: editQuestion_component_1.EditQuestionComponent
    },
    {
        path: 'institute-profile/:name',
        component: instituteProfile_component_1.InstituteProfileComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map