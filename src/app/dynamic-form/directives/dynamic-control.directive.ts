import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Controls } from './../components';
import { Control } from './../models/control';
import { ControlConfig } from './../models/control-config';

@Directive({
  selector: '[dynamicControl]',
})
export class DynamicControlDirective implements OnInit {
  @Input()
  public config: ControlConfig;

  @Input()
  public group: FormGroup;

  @Input()
  public errors: Object = {};

  @Input()
  public disabled: boolean = false;

  private component: ComponentRef<Control>;

  public constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  public ngOnInit() {
    const component = Controls[this.config.type];
    
    if (component) {
      const factory = this.resolver.resolveComponentFactory<Control>(component);
      this.component = this.container.createComponent(factory);
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
      this.component.instance.disabled = this.disabled;
      this.component.instance.errors = this.errors;
    } else {
      console.error('unsupported form control type <' + this.config.type + '>');
    }
  }
}
