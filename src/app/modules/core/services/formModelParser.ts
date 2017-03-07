import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from 'ng2-translate';
import * as _ from 'lodash';

@Injectable()
export class FormModelParser {

  private optionsKey = '_options_';

  public constructor(
    private translate: TranslateService,
    private formBuilder: FormBuilder
  ) { }

  public parse(model: Object, langNamespace: string = ''): { model: {}, formGroup: {} } {
    let parsedModel = {};

    _.forOwn(model, (value, key) => {
      if (key == this.optionsKey) return false;

      let field = {};
      Object.assign(field, value);
      this.translate.get(langNamespace + key).subscribe((res: string) => field['label'] = res);
      
      parsedModel[key] = field;
    });

    return { model: parsedModel, formGroup: this.toFormGroup(parsedModel) };
  }

  public toFormGroup(parsedModel: Object): FormGroup {
    let group = {};

    _.forOwn(parsedModel, (value, key) => {
      group[key] = [''];
    })

    let form = this.formBuilder.group(group);

    return form;
  }
}
