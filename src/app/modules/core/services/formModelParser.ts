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

  /**
   * Get a parsed Form Model from a flat form model object retreived from and
   * API or build manualy any where on this Angular app. Here we set the
   * translated form labels, parse field options, widges, etc. The result of
   * this function is the param to give on the DynamicFormComponent.model.
   *
   * @param model The model retreived from the API or any where
   * @param langNamespace The translations fields namespace
   */
  public parse(model: Object, langNamespace: string = ''): Object {
    let parsedModel = {};
    let options = [];
    let option: any;

    // loop over the model fields
    _.forOwn(model, (value, key) => {
      if (key == this.optionsKey) return false;

      let field = {};
      Object.assign(field, value);
      this.translate.get(langNamespace + key).subscribe((res: string) => field['label'] = res);

      // setup the options translations
      if (_.has(value, 'options')) {
        options = [];

        // loop over the field options to set the option value and translated label
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

  /**
   * Retrieves a FormGroup from a parsed Form Model (the result from the parse
   * method).
   *
   * @param parsedModel The parsed Form Model
   */
  public toFormGroup(parsedModel: Object): FormGroup {
    let group = {};

    _.forOwn(parsedModel, (value, key) => {
      group[key] = [''];
    });

    let form = this.formBuilder.group(group);

    return form;
  }
}
