import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `<ng-content></ng-content><div class="clearfix"></div>`,
  styles: [':host { display: block; }']
})
export class PageHeaderComponent implements OnInit {

  @HostBinding('class')
  public classes: string = 'content-header';

  public constructor() { }

  public ngOnInit() { }
}
