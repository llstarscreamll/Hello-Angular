import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-box-header',
  template: `<ng-content></ng-content>`,
  styles: []
})
export class BoxHeaderComponent implements OnInit {

  @HostBinding('class')
  public classes: string = 'box-header with-border';

  public constructor() { }

  public ngOnInit() { }
}
