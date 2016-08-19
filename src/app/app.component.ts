import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root', // element selector. attribute selector is [sel] then e.g. <div sel> will be replaced
  template: `
    <app-lifecycle *ngIf="show"></app-lifecycle>
    <button (click)="show = !show">Toggle</button>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'blah';
  show = true;
}
