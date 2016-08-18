import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-event-binding',
  template: `
    <button (click)=onClick()>Go</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>();

  onClick() {
    this.clicked.emit("went");
  }
}
