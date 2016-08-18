import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-event-binding',
  template: `
    <button (click)=onClick()>Go</button>
  `
})
export class EventBindingComponent {
  @Output('tappp') clickEventEmitter = new EventEmitter<string>();

  onClick() {
    this.clickEventEmitter.emit("went");
  }
}
