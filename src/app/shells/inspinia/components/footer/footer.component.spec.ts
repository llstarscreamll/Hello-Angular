/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterComponent } from './footer.component';
import { COMPANY } from './../../../../../modules/core/tests/util';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show app copy right', () => {
    component.appState = {companyInfo: COMPANY};
    fixture.detectChanges();

    let copyRightElem = fixture.debugElement.query(By.css('.app-copy-right'));

    expect(copyRightElem.nativeElement.textContent).toContain(COMPANY.fullname);
  });
});
