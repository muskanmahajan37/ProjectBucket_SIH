import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { MdSnackBar } from '@angular/material';

import { QuestionsService } from '../../services/questions/questions.service';
import  { Question, Answer } from '../../classTemplates/question/question';
import * as _ from "lodash";

@Component({
  selector: 'question-view',
  templateUrl: './questionview.component.html',
  moduleId: module.id,
  providers: [ QuestionsService ]
})
export class QuestionViewComponent implements OnInit { 
  question: Question;
  answer: string;

  ngOnInit() : void {
    this.getQuestion()
  }

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService,
    private snackBar: MdSnackBar
    ) {
      this.question= {};
  }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getQuestion(): void {
    this.route.params
        .switchMap((params: Params) => this.questionsService.getQuestionById(params['id']))
        .subscribe(question => {
          console.log(question)
          this.question = question;
          if(this.question.answers) {
            _.orderBy(this.question.answers, ['upvotes.length'], ['desc']);
          }
        });
  }

  insertAnswer(): void {
    this.questionsService.insertAnswer(this.answer, this.question.id, this.question.username)
      .then(answer => {
        console.log(answer)
        if(answer.answer != 'error' && answer.username) {
          this.answer = "";
          this.question.answers.push(answer);
          _.orderBy(this.question.answers, ['upvotes.length'], ['desc']);
        }
        else {
          this.openSnackBar("Answer was not added", "Try Again!");
        }
      })
  }

  deleteAnswer(username: string): void {
    this.questionsService.deleteAnswer(username, this.question.id)
      .then(message => {
        console.log(message)
        if(message == 'success'){
          _.remove(this.question.answers, function(c){
            return c.username == username;
          })
        }
        else {
          this.openSnackBar("Answer couldn't be deleted", "Try Again!");
        }
      });
  }

  upvote(): void {
    this.questionsService.upvote(this.question.id, "pulkit")
        .then(res => {
                this.question.upvotes = res.upvotes
                this.question.downvotes = res.downvotes
            });
  }

  downvote(): void {
    this.questionsService.downvote(this.question.id, "pulkit")
        .then(res => {
                this.question.upvotes = res.upvotes
                this.question.downvotes = res.downvotes
            });
  }

  upvoteAnswer(answer: Answer) {
    this.questionsService.upvoteAnswer(this.question.id, answer.username)
      .then(res => {
                  answer.upvotes = res.upvotes
                  answer.downvotes = res.downvotes
              });
  }

  downvoteAnswer(answer: Answer) {
    this.questionsService.downvoteAnswer(this.question.id, answer.username)
      .then(res => {
                  answer.upvotes = res.upvotes
                  answer.downvotes = res.downvotes
              });
  }
}
