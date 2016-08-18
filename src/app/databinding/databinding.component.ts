import { Component } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component';

@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styles: [`
    .redBorder {
      border: 1px solid red
    }
  `],
  directives: [PropertyBindingComponent]
})
export class DatabindingComponent {
  defaultValue = "default text";
  drawWithRedBorder() {
    return true;
  }
}
