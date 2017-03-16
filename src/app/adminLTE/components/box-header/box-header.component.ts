import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-box-header',
  template: `<ng-content></ng-content>`,
  styles: []
})
export class BoxHeaderComponent implements OnInit {

  @HostBinding('class.box-header') boxHeader: boolean = true;
  @HostBinding('class.with-border') withBorder: boolean = true;

  constructor() { }

  ngOnInit() { }

}
