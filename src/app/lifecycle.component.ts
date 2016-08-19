import {
    Component,
    Input,
    ViewChild,
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
    <p #bindpointP>{{bindpoint}}</p>
    <p>{{bindpointP.textContent}}
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
  @ViewChild('bindpointP') bindpointP: HTMLElement;

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
  }
  ngAfterContentChecked() {
    this.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    this.log("ngAfterViewInit");
    console.log(this.bindpointP);
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
