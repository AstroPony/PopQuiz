import {Component, Input, OnInit} from '@angular/core';
import { Score, StoredScore } from "../../interfaces/score";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})

export class LeaderboardComponent implements OnInit {
  @Input() finalScore: number = 0;
  @Input() finalPlayer: string = '';
  storedScores: StoredScore = {} as StoredScore;
  storedScore: Score = {} as Score;
  scores: Object[] = [];
  score: Score = {} as Score;

  constructor() {
    this.storedScores = JSON.parse(localStorage.getItem("scores") as string);
  }

  ngOnInit(): void {
    this.score = { "name": this.finalPlayer, "score": this.finalScore };
    this.scores.push(this.score)
    localStorage.setItem("scores", JSON.stringify(this.scores));
  }

  //TODO Finish the Leaderboard

}
