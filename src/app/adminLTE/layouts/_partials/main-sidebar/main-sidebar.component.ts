import { Component, ElementRef, Input, OnInit } from '@angular/core';

import { MenuItem } from './../../../../core/models/MenuItem';
import { AuthUser } from './../../../../auth/models/authUser';
import { MENU } from './../../../../menu';

@Component({
  selector: '[app-admin-lte-main-sidebar]',
  templateUrl: './main-sidebar.component.html',
})
export class MainSidebarComponent implements OnInit {

  public menuItems: MenuItem[] = MENU;

  public selectedItemIndex: number = 0;
  @Input() user: AuthUser;

  public constructor(public element: ElementRef) { }

  public ngOnInit() { }

  public selectedMenuItem(itemIndex: number) {
    this.selectedItemIndex = itemIndex;
  }

}
