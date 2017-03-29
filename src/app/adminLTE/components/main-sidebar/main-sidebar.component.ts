import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { MenuItem } from './../../../core/models/MenuItem';
import { AuthUser } from './../../../auth/models/authUser';
import { MENU } from './../../../menu';

@Component({
  selector: '[app-main-sidebar]',
  templateUrl: './main-sidebar.component.html',
})
export class MainSidebarComponent implements OnInit {
  @Input()
  public user: AuthUser;

  public menuItems: MenuItem[] = MENU;

  public selectedItemIndex: number = -1;
  
  public constructor(public element: ElementRef) { }

  public ngOnInit() { }

  public selectedMenuItem(itemIndex: number) {
    this.selectedItemIndex = itemIndex;
  }
}
