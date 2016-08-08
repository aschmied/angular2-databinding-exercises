import { Component } from '@angular/core';
import { OtherComponent } from './other'

@Component({
  moduleId: module.id,
  selector: 'app-root', // element selector. attribute selector is [sel] then e.g. <div sel> will be replaced
  template: `
    <h1>blah</h1>
    <app-other></app-other>
  `,
  styleUrls: ['app.component.css'],
  styles: [`
  h1 {
    color: red
  }
  `],
  directives: [OtherComponent]
})
export class AppComponent {
  title = 'blah';
}
