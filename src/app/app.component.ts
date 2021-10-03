import {Component, OnInit} from '@angular/core';
import { DataService } from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  playerName: string = '';
  playerScore: number = 0;
  completed: boolean = false;

  constructor(private dataService: DataService) {
  }

  setPlayer(name: string) {
    this.playerName = name;
  }

  setScore(score: number) {
    this.playerScore = this.playerScore + score;
  }

  ngOnInit(): void {
    this.dataService.getQuizCompleted().subscribe((completed: boolean) => {
      this.completed = completed;
    });
  }
}
