/* tslint:disable:no-unused-variable */
import { async, ComponentFixture,  fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { SidebarLayoutComponent } from './sidebar-layout.component';
import { UserAccountMenuComponent } from './../../components/user-account-menu/user-account-menu.component';
import { MainTopNavbarComponent } from './../../components/main-top-navbar/main-top-navbar.component';
import { MainSidebarComponent } from './../../components/main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './../../components/footer/footer.component';
import * as fromRoot from './../../../reducers';
import * as authActions from './../../../auth/actions/auth.actions';
import * as appActions from './../../../core/actions/app.actions';
import { IMPORTS } from './../../utils';
import { TEST_USER, COMPANY } from './../../../core/tests/util';

describe('AdminLTE SidebarLayoutComponent', () => {
  let component: SidebarLayoutComponent;
  let fixture: ComponentFixture<SidebarLayoutComponent>;
  let store: Store<fromRoot.State>;
  let user = TEST_USER;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarLayoutComponent, MainTopNavbarComponent, MainSidebarComponent, UserAccountMenuComponent, MainFooterComponent],
      imports: [IMPORTS]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarLayoutComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call store to retreive user and app data', fakeAsync(() => {
    spyOn(store, 'select');

    component.ngOnInit();
    fixture.detectChanges();
    tick();

    expect(store.select).toHaveBeenCalledWith(fromRoot.getAuthState);
    expect(store.select).toHaveBeenCalledWith(fromRoot.getAppState);
  }));
});
