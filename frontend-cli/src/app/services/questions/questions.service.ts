import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Question, Answer } from '../../classTemplates/question/question';
import { Info } from '../../classTemplates/project/project';
import { BackendUrlService } from '../backend-url.service';
import { SessionService } from '../session.service';
import  { Response } from '../../classTemplates/assertionResponse/response';

@Injectable()
export class QuestionsService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private forumUrl = BackendUrlService.url + '/homepage/forum';
    constructor(private http: Http, private sessionService: SessionService) {}

    create(question: Question): Promise<Response> {
        this.headers.set('sess', this.sessionService.getSession()); 
        const createUrl = BackendUrlService.url + '/questions/insert';
        return this.http
            .post(createUrl, JSON.stringify(question), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Response)
            .catch(this.handleError);
    }

    update(question: Question): Promise<Response> {
        this.headers.set('sess', this.sessionService.getSession()); 
        const updateUrl = BackendUrlService.url + '/questions/'+question.id+'/updatequestion';
        return this.http
            .post(updateUrl, JSON.stringify(question), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Response)
            .catch(this.handleError);
    }

    getQuestionById(id: string): Promise<Question> {
        this.headers.set('sess', this.sessionService.getSession()); 
        const getUrl = BackendUrlService.url + '/questions/'+id;

        return this.http
            .get(getUrl, {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Question)
            .catch(this.handleError);
    }

    insertAnswer(answer: string, questionId: string, username: string): Promise<Answer> {
        this.headers.set('sess', this.sessionService.getSession()); 
        const insertAnswerUrl = BackendUrlService.url + '/questions/'+questionId+'/answer';
        return this.http
            .post(insertAnswerUrl, JSON.stringify({"answer": answer}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Answer)
            .catch(this.handleError);
    }

    deleteAnswer(username: string, questionId: string): Promise<Response> {
        this.headers.set('sess', this.sessionService.getSession()); 
        const deleteAnswerUrl = BackendUrlService.url + '/questions/'+questionId+'/'+username+'/deleteans';

        return this.http
            .post(deleteAnswerUrl, JSON.stringify({}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Response)
            .catch(this.handleError);
    }

    getForumFeed() {
        this.headers.set('sess', this.sessionService.getSession()); 
        return this.http
            .get(this.forumUrl, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    upvote(questionId: string): Promise<Info> {
        this.headers.set('sess', this.sessionService.getSession()); 
        const upvoteUrl = BackendUrlService.url + '/questions/' + questionId + '/upvote';

        return this.http
            .put(upvoteUrl, JSON.stringify({}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Info)
            .catch(this.handleError);
    }

    downvote(questionId: string): Promise<Info> {
        this.headers.set('sess', this.sessionService.getSession()); 
        const downvote = BackendUrlService.url + '/questions/' + questionId + '/downvote';

        return this.http
            .put(downvote, JSON.stringify({}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Info)
            .catch(this.handleError);
    }

    upvoteAnswer(questionId: string, username: string): Promise<Info> {
        this.headers.set('sess', this.sessionService.getSession()); 
        const upvoteUrl = BackendUrlService.url + '/questions/' + questionId + '/' + username + '/upvote';

        return this.http
            .put(upvoteUrl, JSON.stringify({}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Info)
            .catch(this.handleError);
    }

    downvoteAnswer(questionId: string, username: string): Promise<Info> {
        this.headers.set('sess', this.sessionService.getSession()); 
        const downvote = BackendUrlService.url + '/questions/' + questionId + '/' + username + '/downvote';

        return this.http
            .put(downvote, JSON.stringify({}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Info)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}