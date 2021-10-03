import {Component, OnDestroy, OnInit} from '@angular/core';
import { DataService } from "./services/data.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  playerName: string = '';
  playerScore: number = 0;
  completed: boolean = false;
  private destroy$ = new Subject();

  constructor(private dataService: DataService) {
  }

  setPlayer(name: string) {
    this.playerName = name;
  }

  setScore(score: number) {
    this.playerScore = this.playerScore + score;
  }

  ngOnInit(): void {
    this.dataService.getQuizCompleted()
      .pipe(takeUntil(this.destroy$))
      .subscribe(completed => this.completed = completed);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
