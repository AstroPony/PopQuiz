import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Question} from "../../interfaces/question";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit, OnChanges {
  @Input() question: Question = {} as Question;
  @Output() incScore = new EventEmitter<boolean>();
  answers: [] = [];

  constructor() { }

  ngOnInit(): void {
    this.answers = this.question.answers;
  }

  ngOnChanges(): void {
    this.answers = this.question.answers;
  }

  checkAnswer(i: number) {
    if (i === this.question.correctIndex) {
      this.incScore.emit(true);
    } else {
      this.incScore.emit(false);
    }
  }

}
