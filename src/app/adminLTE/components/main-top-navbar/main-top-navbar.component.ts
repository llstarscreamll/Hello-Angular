import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { MenuItem } from './../../..//core/models/MenuItem';
import { AuthUser } from './../../../auth/models/authUser';

declare let jQuery: any;

@Component({
  selector: 'app-main-top-navbar',
  templateUrl: './main-top-navbar.component.html',
  styles: [':host { display: block; }']
})
export class MainTopNavbarComponent implements OnInit {

  @Input()
  public authState;
  
  @Input()
  public appState;

  public viewPortWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    this.viewPortWidth = event.target.innerWidth;
  }

  public constructor(public element: ElementRef) { }

  public ngOnInit() { }

  /**
   * Expands or shrinks the sidebar.
   */
  public toggleNavigation() {
    if (this.viewPortWidth < 768) {
      jQuery('.sidebar-mini').toggleClass('sidebar-open');
    } else {
      jQuery('.sidebar-mini').toggleClass('sidebar-collapse');
    }
  }

  /**
   * Expands or shrinks the control sidebar.
   */
  public toggleControlSidebar() {
    jQuery('.sidebar-mini').toggleClass('control-sidebar-open');
  }
}
