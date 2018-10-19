import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: 'guards-component',
  template: `
    <p>
     <strong>404 not found</strong>
    </p>
        <button class="btn"(click)="done = true">Done</button>
        <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
  `
})
export class GuardsComponent {

  done = false;

  constructor(private router: Router) { }

  onNavigate() {
    this.router.navigate(['/']);
  }


}
