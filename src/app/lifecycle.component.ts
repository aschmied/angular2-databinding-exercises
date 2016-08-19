import {
    Component,
    Input,
    ContentChild,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @Input() bindpoint = 1000;
  @ContentChild('boundContent') boundContent: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.log("ngOnInit");
  }
  ngOnChanges() {
    this.log("ngOnChanges");
  }
  ngDoCheck() {
    this.log("ngDoCheck");
  }
  ngAfterContentInit() {
    this.log("ngAfterContentInit");
    console.log(this.boundContent);
  }
  ngAfterContentChecked() {
    this.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    this.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    this.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    this.log("ngOnDestroy");
  }

  private log(message: string) {
    console.log(message);
  }

}
