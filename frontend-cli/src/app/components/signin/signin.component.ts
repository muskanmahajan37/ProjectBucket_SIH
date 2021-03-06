import { Component } from '@angular/core';
import { SigninService } from '../../services/signin/signin.service';
import { Router } from '@angular/router';
import { ProjectsFeedComponent } from "../projects-feed/projects-feed.component";
import { SessionService } from '../../services/session.service';

@Component({
    selector: 'signin',
    templateUrl: './signin.component.html',
    styles: [],
    providers: [
        SigninService,
        SessionService
    ]
})
export class SigninComponent {

    licenses: Array<Object>;
    signup1: boolean;
    signup2: boolean;
    userName: string;
    isLoggedin: string;
    sessionid: string;
    password: string;
    signup2Error: boolean;

    constructor(
        private signinService: SigninService,
        private router: Router,
        private sess: SessionService
    ) {
        this.licenses = [
            {
                name: "None",
                text: ""
            },
            {
                name: "MIT",
                text: "MIT open source to all"
            }
        ];
        this.signup1 = true;
    }

    signUp(userName: string, mailid: string, password: string) {
        this.signup1 = false;
        this.signup2 = true;
        console.log(userName, mailid, password);
        this.signinService.signup(userName, mailid, password).then(data => {
            this.signup2Error = false;
            return this.signup1;
        })

    }

    login(userName: string, password: string) {
        this.signinService.login(userName, password).then(data => {
            console.log(data);
            if (data.username) {
                this.userName = data.username;
                this.isLoggedin = data.is_valid;
                this.sessionid = data.session_id;
                this.sess.setSession(data.session_id);
                this.router.navigate(['/projects-feed']);
                console.log(this.sessionid);
            }
        });
    }
}


