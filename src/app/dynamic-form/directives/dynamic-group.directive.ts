import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Groups } from './../components';
import { Control } from './../models/control';
import { GroupConfig } from './../models/group-config';
import { Group } from './../models/group';
import { ControlConfig } from './../models/control-config';

@Directive({
  selector: '[dynamicGroup]',
})
export class DynamicGroupDirective implements OnInit {
  @Input()
  public config: Group;

  @Input()
  public group: FormGroup;

  @Input()
  public errors: Object = {};

  @Input()
  public disabled: boolean = false;

  private component: ComponentRef<Group>;

  public constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  public ngOnInit() {
    const component = Groups[this.config.type];

    if (component) {
      const factory = this.resolver.resolveComponentFactory<Group>(component);
      this.component = this.container.createComponent(factory);
      this.component.instance.controls = this.config.controls;
      this.component.instance.type = this.config.type;
      this.component.instance.visibility = this.config.visibility;
      this.component.instance._options_ = this.config._options_;
      this.component.instance.group = this.group;
    } else {
      console.error('unsupported form group <' + this.config.type + '>');
    }
  }
}
