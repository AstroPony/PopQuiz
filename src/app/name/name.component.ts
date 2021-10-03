import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  @Output() playerName = new EventEmitter<string>();
  value = '';

  constructor() { }

  setPlayerName(name: string) {
    this.playerName.emit(name);
  }

  ngOnInit(): void {
  }

}
