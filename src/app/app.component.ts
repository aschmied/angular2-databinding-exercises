import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding';

@Component({
  moduleId: module.id,
  selector: 'app-root', // element selector. attribute selector is [sel] then e.g. <div sel> will be replaced
  template: `
    <app-databinding></app-databinding>
  `,
  styleUrls: ['app.component.css'],
  directives: [DatabindingComponent]
})
export class AppComponent {
  title = 'blah';
}
