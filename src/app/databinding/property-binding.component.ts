import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-property-binding',
  template: `
    {{ property }}
  `,
  styles: []
})
export class PropertyBindingComponent {
  @Input() property : number = 0;
}
