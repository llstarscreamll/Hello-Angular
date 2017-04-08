/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Store } from '@ngrx/store';

import { MainSidebarComponent } from './main-sidebar.component';
import { IMPORTS } from './../../utils';
import { TEST_USER } from './../../../core/tests/util';
import * as fromRoot from './../../../reducers';
import * as authActions from './../../../auth/actions/auth.actions';

describe('AdminLTE MainSidebarComponent', () => {
  let component: MainSidebarComponent;
  let fixture: ComponentFixture<MainSidebarComponent>;
  let store: Store<fromRoot.State>;
  let user = TEST_USER;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSidebarComponent ],
      imports: [ IMPORTS ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSidebarComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    component.user = user;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the user info on sidebar top area', () => {
    let userNameZone1 = fixture.debugElement.query(By.css('span.username')).nativeElement;
    expect(userNameZone1.textContent).toEqual(user.name);
  });

  it('should hide user area if user property is not set', () => {
    component.user = undefined;
    fixture.detectChanges();

    let userNameZoneWrapper = fixture.debugElement.query(By.css('div.user-panel'));
    expect(userNameZoneWrapper).toBeNull();
  });
});
