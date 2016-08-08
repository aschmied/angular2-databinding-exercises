import { Component } from '@angular/core';
import { AnotherComponent, OtherComponent } from './other';

@Component({
  moduleId: module.id,
  selector: 'app-root', // element selector. attribute selector is [sel] then e.g. <div sel> will be replaced
  template: `
    <h1>blah</h1>
    <app-other></app-other>
    <app-another></app-another>
  `,
  styleUrls: ['app.component.css'],
  styles: [`
  h1 {
    color: red
  }
  `],
  directives: [AnotherComponent, OtherComponent]
})
export class AppComponent {
  title = 'blah';
}
