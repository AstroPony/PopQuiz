import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

import { DataService } from "../services/data.service";
import { Question } from "../interfaces/question";
import { TimerService } from "../services/timer.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit {
  @Output() updateScore = new EventEmitter<number>();
  @Input() secLeft: number = 0;
  secToScore: number = 0;

  question: Question = {} as Question;

  constructor(private dataService: DataService,
              private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.getSecondsLeft().subscribe(seconds => {
      if (seconds === 0) {
        this.question = this.dataService.getData();
      }
    });
  }

  shouldSetScore(answer: boolean) {
    if (answer) {
      this.updateScore.emit(this.secToScore);
    }
    this.question = this.dataService.getData();
    this.timerService.startTimer();
  }

  setScoreBySec(seconds: number) {
    this.secToScore = seconds;
  }

}
