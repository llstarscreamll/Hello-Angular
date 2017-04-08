/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, getTestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MainTopNavbarComponent } from './main-top-navbar.component';
import { UserAccountMenuComponent } from './../user-account-menu/user-account-menu.component';

describe('AdminLTE MainTopNavbarComponent', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainTopNavbarComponent, UserAccountMenuComponent],
    }).compileComponents();

    fixture = getTestBed().createComponent(MainTopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});