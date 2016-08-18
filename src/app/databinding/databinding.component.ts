import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styles: [`
    .redBorder {
      border: 1px solid red
    }
  `]
})
export class DatabindingComponent {
  defaultValue = "default text";
  drawWithRedBorder() {
    return true;
  }
}
