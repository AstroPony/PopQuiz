import { Injectable } from '@angular/core';

import data from "../../assets/data.json";
import { Question } from "../interfaces/question";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  questions: [] = [];
  usedQuestions: [] = [];
  randomQuestion: Question | undefined;
  quizComplete$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.questions = data.questions;
  }

  getData(): any {
    if (this.usedQuestions.length === this.questions.length) {
      this.quizComplete$.next(true);
    } else {
      this.randomQuestion = this.questions[Math.floor(Math.random()*this.questions.length)];

      if(!this.usedQuestions.includes(this.randomQuestion)) {
        this.usedQuestions.push(this.randomQuestion);
        return this.randomQuestion;
      } else {
        if(this.usedQuestions.length < this.questions.length) {
          return this.getData();
        } else {
          this.quizComplete$.next(true);
        }
      }
    }
  }

  getQuizCompleted(): Observable<boolean> {
    return this.quizComplete$.asObservable();
  }
}
