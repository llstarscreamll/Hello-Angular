import { AfterViewInit, Directive, ElementRef, EventEmitter, forwardRef, Input, Output, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

import * as jQuery from 'jquery';
import 'eonasdan-bootstrap-datetimepicker';
import * as moment from 'moment';

import { Control } from './../models/control';
import { ControlConfig } from './../models/control-config';


const DATE_PICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatetimeDirective),
  multi: true
};

@Directive({
  selector: '[datetime]',
  providers: [DATE_PICKER_VALUE_ACCESSOR],
})
export class DatetimeDirective implements ControlValueAccessor, OnInit, AfterViewInit {
  @Input()
  disabled: boolean = false;

  @Input()
  name: string = '';

  @Input()
  placeholder: string = '';

  @Input()
  classes: any = '';

  @Output()
  dateChanged = new EventEmitter<string>();

  public value: string = '';

  public constructor(private input: ElementRef) { }

  public ngOnInit() {
    this.value = this.input.nativeElement.value;
  }

  public ngAfterViewInit() {
    jQuery(this.input.nativeElement).datetimepicker({ format: 'YYYY-MM-DD HH:mm:ss' });
    jQuery(this.input.nativeElement).on('dp.change', (e) => {
      let date: string = e.date ? e.date.format('YYYY-MM-DD HH:mm:ss') : null;
      this.value = date;
      this.onChange(date);
      this.onTouched();
      this.dateChanged.emit(date);
    });
  }

  private onTouched = () => { };
  private onChange: (value: string) => void = () => { };
  writeValue(date: string) {
    this.value = date;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}