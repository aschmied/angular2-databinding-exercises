import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-two-way-binding',
  template: `
    <p>
      <input type="text" [(ngModel)]="person.name">
      <input type="text" [(ngModel)]="person.name">
    </p>
  `
})
export class TwoWayBindingComponent {
  person = {
    name: 'Anthony',
    age: 35,
  };
}
