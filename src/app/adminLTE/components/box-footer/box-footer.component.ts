import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-footer',
  template: `
    <div class="">
      <ng-content></ng-content>
    <div>
  `,
  styles: [':host { display: block; }']
})
export class BoxFooterComponent implements OnInit {

  @HostBinding('class')
  public classes: string = 'box-footer';

  public constructor() { }

  public ngOnInit() { }
}
