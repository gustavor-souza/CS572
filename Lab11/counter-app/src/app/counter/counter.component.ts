import { Component, OnInit, Output, Input } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() counterValue: number;
  @Output() onChange;

  constructor() { }

  ngOnInit() {
    this.counterValue = 0;
  }

  minus() {
    this.counterValue -= 1;
    this.onChange.emit(this.counterValue);
  }

  plus() {
    this.counterValue +=  1;
    this.onChange.emit(this.counterValue);
  }

}
