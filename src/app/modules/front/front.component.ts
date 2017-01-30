import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-front',
  template: `
    <app-nav-top-layout>
      <router-outlet></router-outlet>
    </app-nav-top-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontComponent implements OnInit {

  public constructor() { }

  ngOnInit() { }

}
