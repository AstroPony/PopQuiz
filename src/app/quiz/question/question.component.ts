import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Question} from "../../interfaces/question";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit, OnChanges {
  @Input() question: Question = {} as Question;
  questionText: string = '';
  answers: [] = [];

  constructor() { }

  ngOnInit(): void {
    this.questionText = this.question.question;
  }

  ngOnChanges(): void {
    this.questionText = this.question.question;
  }

}
