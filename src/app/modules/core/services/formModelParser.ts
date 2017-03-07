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

  public parse(model: Object, langNamespace: string = ''): Object {
    let parsedModel = {};
    let options = [];
    let option: any;

    _.forOwn(model, (value, key) => {
      if (key == this.optionsKey) return false;

      let field = {};
      Object.assign(field, value);
      this.translate.get(langNamespace + key).subscribe((res: string) => field['label'] = res);

      // setup the options translations
      if (_.has(value, 'options')) {
        options = [];
        _.forEach(value.options, (optValue) => {
          option = { value: '', label: '' };
          option.value = optValue;
          this.translate.get(langNamespace + key + '-options.' + optValue)
            .subscribe((res: string) => option.label = res);
          options.push(option);
        });
        field['options'] = options;
      }

      parsedModel[key] = field;
    });

    return parsedModel;
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
