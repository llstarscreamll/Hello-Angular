import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `<ng-content></ng-content>`,
  styles: [':host { display: block; }']
})
export class PageHeaderComponent implements OnInit {

  @HostBinding('class') classes: string = 'row wrapper border-bottom white-bg page-heading';

  constructor() { }

  ngOnInit() {
  }

}
