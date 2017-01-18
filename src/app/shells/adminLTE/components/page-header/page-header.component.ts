import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `<ng-content></ng-content>`,
  styles: [':host { display: block; }']
})
export class PageHeaderComponent implements OnInit {

  @HostBinding('class.content-header') headerClass: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
