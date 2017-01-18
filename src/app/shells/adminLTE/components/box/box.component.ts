import { Component, Input, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  template: `<ng-content></ng-content><div *ngIf="overlay" class="overlay"><i class="fa fa-refresh fa-spin"></i></div>`,
  styles: [`
  :host {
    display: block;
  }
    `]
})
export class BoxComponent implements OnInit {

  @Input() overlay: boolean = false;

  @HostBinding('class.box') boxStyle: boolean = true;
  @HostBinding('class.hide') @Input() hidden: boolean = false;
  @HostBinding('class.collapsed-box') @Input() collapse: boolean = false;

  constructor() { }

  ngOnInit() { }

  public toggleCollapse(collapse: boolean) {
    this.collapse = collapse;
  }

  public hideBox() {
    this.hidden = true;
  }

}
