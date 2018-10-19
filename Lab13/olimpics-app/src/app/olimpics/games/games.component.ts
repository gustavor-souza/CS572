import { DbService } from './../db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
})
export class GamesComponent implements OnInit {

  constructor(private dbService: DbService) { }

  ngOnInit() {
  }

}
