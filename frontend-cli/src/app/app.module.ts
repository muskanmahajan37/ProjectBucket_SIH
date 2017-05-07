import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { EditQuestionComponent } from './components/edit-question/edit-question.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForumComponent } from './components/forum/forum.component';
import { InstituteComponent } from './components/institute/institute.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsFeedComponent } from './components/projects-feed/projects-feed.component';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { QuestionViewComponent } from './components/question-view/question-view.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminNavbarComponent } from './components/admin-panel/admin-navbar/admin-navbar.component';
import { HomePageComponent } from './components/institute/home-page/home-page.component';
import { InstituteProfileComponent } from './components/institute/institute-profile/institute-profile.component';
import { InstituteNavbarComponent } from './components/institute/institute-navbar/institute-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    AddQuestionComponent,
    AdminPanelComponent,
    EditProfileComponent,
    EditProjectComponent,
    EditQuestionComponent,
    FooterComponent,
    ForumComponent,
    InstituteComponent,
    NavbarComponent,
    ProjectsFeedComponent,
    ProjectViewComponent,
    QuestionViewComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    AdminNavbarComponent,
    HomePageComponent,
    InstituteProfileComponent,
    InstituteNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
