/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../../reducers';

import { AlertsComponent } from './alerts.component';
import { IMPORTS } from './../../utils';

describe('AlertsComponent', () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;
  let store: Store<fromRoot.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsComponent ],
      imports: [ IMPORTS ]
    })
    .compileComponents();

    fixture = getTestBed().createComponent(AlertsComponent);
    component = fixture.componentInstance;
    store = getTestBed().get(Store);
  }));

  it('should create', () => {
    component.appMessage = {
      type: '',
      errors: {},
      message: '',
      
      status_code: null
    };
    
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
