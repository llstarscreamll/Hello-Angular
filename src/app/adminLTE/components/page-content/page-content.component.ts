import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-content',
  template: `<ng-content></ng-content>`,
  styles: [':host { display: block; }']
})
export class PageContentComponent implements OnInit {

  @HostBinding('class')
  public classes: string = 'content';

  public constructor() { }

  public ngOnInit() { }
}
