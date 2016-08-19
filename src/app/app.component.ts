import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root', // element selector. attribute selector is [sel] then e.g. <div sel> will be replaced
  template: `
    <app-lifecycle *ngIf="show" [bindpoint]="bindpointValue">
      {{test}}
    </app-lifecycle>
    <button (click)="show = !show">Toggle</button>
    <button (click)="test = 'changed value'">change text</button>
    <button (click)="bindpointValue = 2000">change number</button>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'blah';
  test = 'starting value';
  show = true;
  bindpointValue = 1000;
}
