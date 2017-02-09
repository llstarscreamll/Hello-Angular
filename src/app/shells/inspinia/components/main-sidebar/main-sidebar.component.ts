import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { MenuItem } from './../../../../modules/core/models/MenuItem';
import { AuthUser } from './../../../../modules/auth/models/authUser';

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

  public menuItems: MenuItem[] = [
    { label: 'Header', icon: '', url: '', visivility: 'private', isHeader: true, childs: [] },
    { label: 'Home', icon: 'fa fa-home', url: '/front/landing', visivility: 'private', isHeader: false, childs: [] },
    { label: 'Payrolls', icon: 'fa fa-dollar', url: '/payroll/setup-wizard', visivility: 'private', isHeader: false, childs: [] },
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
