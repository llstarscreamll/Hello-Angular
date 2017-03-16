import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { MenuItem } from './../../../../modules/core/models/MenuItem';
import { AuthUser } from './../../../../modules/auth/models/authUser';
import { MENU } from './../../../../menu';

declare let jQuery:any;

@Component({
  selector: '[app-admin-lte-main-sidebar]',
  templateUrl: './main-sidebar.component.html',
  styles: [`
    li.header {
      background-color: #2b3d4b;
    }

    li.header span {
      display: block;
      color: #6f6f6f;
      padding: 14px 20px 14px 25px;
      font-size: smaller;
    }
  `]
})
export class MainSidebarComponent implements OnInit {

  public menuItems: MenuItem[] = MENU;

  public selectedItemIndex: number = -1;

  @HostBinding('class') classes: string = 'navbar-default navbar-static-side';
  
  @Input() user: AuthUser;
  @Input() company: any;

  public constructor(public element: ElementRef) { }

  public ngOnInit() { }

  ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
    }

  public selectedMenuItem(itemIndex: number) {
    this.selectedItemIndex = itemIndex;
  }

}
