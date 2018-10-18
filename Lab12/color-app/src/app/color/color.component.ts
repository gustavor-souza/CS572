import { Component , Directive, Input } from '@angular/core';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {

  @Input() items: Array<String>;
  private message: string;

  constructor() {
    this.message = 'Click on items';
  }

  changeColor(e) {
    this.message = e;
  }

}
