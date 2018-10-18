import { Directive, HostBinding, HostListener, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[mynewcolor]'
})
export class MynewcolorDirective {

  @HostBinding('style.color') color;
  @Input() mynewcolor;
  @Output() onColorChange;

  constructor() {
    this.onColorChange = new EventEmitter();
  }

  @HostListener('click') changeColor() {
    this.color = this.color === this.mynewcolor ? 'black' : this.mynewcolor;
    this.onColorChange.emit(`An element changed its color to ${this.color}`);
  }

}
