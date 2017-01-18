import { Component, OnInit } from '@angular/core';
import { MenuItem } from './../../../../../modules/core/models/MenuItem';

@Component({
  selector: '[app-admin-lte-main-sidebar]',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class AdminLteMainSidebarComponent implements OnInit {

  public menuItems: MenuItem[] = [
    { label: 'Header', icon: '', url: '', visivility: 'private', isHeader: true, childs: [] },
    { label: 'Home', icon: 'fa fa-home', url: '/front/landing', visivility: 'private', isHeader: false, childs: [] },
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

  public constructor() { }

  public ngOnInit() { }

  public selectedMenuItem(itemIndex: number) {
    this.selectedItemIndex = itemIndex;
  }

}
