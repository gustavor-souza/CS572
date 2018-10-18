import { Directive, HostBinding, Input  } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective {

  @HostBinding('style.visibility') visibility;
  @Input() myvisibility;

  ngOnInit() {
    this.visibility = this.myvisibility ? 'visible' : 'hidden';
  }

}
