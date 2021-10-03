import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { TimerService } from "../../services/timer.service";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Output() secLeft = new EventEmitter<number>();
  progressbarValue: number = 0;

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.startTimer();
    this.timerService.getProgressbarValue().subscribe(value => {
      this.progressbarValue = value;
    });
    this.timerService.getSecondsLeft().subscribe(seconds => {
      this.secLeft.emit(seconds);
    });
  }

}
