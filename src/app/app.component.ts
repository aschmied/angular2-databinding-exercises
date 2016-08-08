import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root', // element selector. attribute selector is [sel] then e.g. <div sel> will be replaced
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  styles: [`
  h1 {
    color: red
  }
  `]
})
export class AppComponent {
  title = 'blah';
}
