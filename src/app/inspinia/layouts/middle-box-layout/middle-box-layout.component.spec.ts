/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Store } from '@ngrx/store';

import { IMPORTS } from './../../utils';
import { COMPANY } from './../../../../modules/core/tests/util';
import * as fromRoot from './../../../core/reducers';
import * as appActions from './../../../../modules/core/actions/app';
import { MiddleBoxLayoutComponent } from './middle-box-layout.component';

describe('MiddleBoxLayoutComponent', () => {
  let component: MiddleBoxLayoutComponent;
  let fixture: ComponentFixture<MiddleBoxLayoutComponent>;
  let store: Store<fromRoot.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleBoxLayoutComponent ],
      imports: [...IMPORTS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleBoxLayoutComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the App name on page header', () => {
    component.ngOnInit();

    store.dispatch(new appActions.GetAppDataSuccessAction(COMPANY));
    fixture.detectChanges();
    
    let appNameElem = fixture.debugElement.query(By.css('div.login-logo'));

    component.appState$.subscribe(res => {
      expect(res.companyInfo.fullname).toEqual(COMPANY.fullname);
      expect(appNameElem.nativeElement.textContent).toContain(COMPANY.fullname);
    });
  });

});
