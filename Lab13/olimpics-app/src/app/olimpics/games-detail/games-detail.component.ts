import { DbService } from './../db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html'
})
export class GamesDetailComponent  {

  private data: object;

  constructor(private dbService: DbService, private router: ActivatedRoute ) { 
    this.router.params.subscribe(params => {
      this.data = this.dbService.getGame(params['id']); 
      console.log(this.data);   
  });
  }
}
