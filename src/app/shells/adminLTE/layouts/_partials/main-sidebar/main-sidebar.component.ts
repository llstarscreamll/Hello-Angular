import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from './../../../../../modules/core/models/MenuItem';
import { AuthUser } from './../../../../../modules/auth/models/authUser';

@Component({
  selector: '[app-admin-lte-main-sidebar]',
  templateUrl: './main-sidebar.component.html',
})
export class MainSidebarComponent implements OnInit {

  public menuItems: MenuItem[] = [
    { label: 'Header', icon: '', url: '', visivility: 'private', isHeader: true, childs: [] },
    { label: 'Home', icon: 'fa fa-home', url: '/front/landing', visivility: 'private', isHeader: false, childs: [] },
    { label: 'Payrolls', icon: 'fa fa-dollar', url: '/payrolls-setup', visivility: 'private', isHeader: false, childs: [] },
    { label: 'public menu 2', icon: 'fa fa-link', url: '/foo/foo', visivility: 'public', isHeader: false, childs: [] },
    {
      label: 'tree 1', icon: 'fa fa-link', url: '/foo/foo', visivility: 'private', isHeader: false, childs: [
        { label: 'sub-menu 1', icon: 'fa fa-link', url: '/foo/foo', visivility: 'private', isHeader: false, childs: [] },
        { label: 'sub-menu 2', icon: 'fa fa-link', url: '/foo/foo', visivility: 'private', isHeader: false, childs: [] },
        { label: 'sub-menu 3', icon: 'fa fa-link', url: '/foo/foo', visivility: 'private', isHeader: false, childs: [] },
      ]
    },
    {
      label: 'tree 2', icon: 'fa fa-home', url: '/foo/foo', visivility: 'private', isHeader: false, childs: [
        { label: 'sub-menu 1', icon: 'fa fa-link', url: '/foo/foo', visivility: 'private', isHeader: false, childs: [] },
        { label: 'sub-menu 2', icon: 'fa fa-link', url: '/foo/foo', visivility: 'private', isHeader: false, childs: [] },
        { label: 'sub-menu 3', icon: 'fa fa-link', url: '/foo/foo', visivility: 'private', isHeader: false, childs: [] },
      ]
    }
  ];

  public selectedItemIndex: number = 0;
  @Input() user: AuthUser;

  public constructor() { }

  public ngOnInit() { }

  public selectedMenuItem(itemIndex: number) {
    this.selectedItemIndex = itemIndex;
  }

}
