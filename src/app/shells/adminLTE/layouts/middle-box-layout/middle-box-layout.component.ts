import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-box-layout',
  template: `
    <div class="login-box">
      <div class="login-logo">
        <a routerLink="/front/landing"><b>Admin</b>LTE</a>
      </div>
      <div class="login-box-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [':host { display: block; }']
})
export class MiddleBoxLayoutComponent implements OnInit {

  @HostBinding('class.login-page') loginStyle: boolean = true;

  constructor() { }

  ngOnInit() { }

}
