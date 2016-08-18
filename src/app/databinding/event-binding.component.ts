import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-event-binding',
  template: `
    <button (click)=onClick()>Go</button>
  `,
  styles: []
})
export class EventBindingComponent {
  onClick() {
    alert("went");
  }
}
