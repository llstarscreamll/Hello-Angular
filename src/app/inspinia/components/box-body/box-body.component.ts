import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-body',
  template: `<ng-content></ng-content>`,
  styles: [':host { display: block; }']
})
export class BoxBodyComponent implements OnInit {

  @HostBinding('class') classes: string = 'ibox-content';

  constructor() { }

  ngOnInit() { }

}
