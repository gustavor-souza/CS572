import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DbService {

  private data = [
    {_id:1, game:{name:'Rowing', schedule:[{stadium:'shea stadium', date:new Date(), time:'3:00PM'},
     {stadium:'Saitama Arena', date:new Date(), time:'9:00PM'}]}},
    {_id:2, game:{name:'Judo', schedule:[{stadium:'Alianz Arena', date:new Date(), time:'4:00PM'}]}}
    ];

  constructor() { }

  getData(): object {
    return this.data;
  }

  getGame(id: number): object {
    return this.data.filter(game => game._id == id)[0];
  }
}
