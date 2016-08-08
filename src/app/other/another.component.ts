import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-another',
  template: `
    <article>
      <h1>Content</h1>
      <ng-content></ng-content>
    </article>
  `,
  styles: [`
    article {
      border: 1px solid black
    }
    h1 {
      color: blue
    }
  `]
})
export class AnotherComponent {
}
