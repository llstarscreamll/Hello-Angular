import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `<ng-content></ng-content>`,
  styles: [':host { display: inline-block; }']
})
export class PageHeaderComponent implements OnInit {

  @HostBinding('class.content-header') headerClass: boolean = true;
  @HostBinding('class.row') rowClass: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
