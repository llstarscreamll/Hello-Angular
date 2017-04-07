import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

import { Group } from './../models/group';
import { ControlConfig } from './../models/control-config';

@Injectable()
export class FormModelParserService {
  private optionsKey = '_options_';
  private fieldTypesForRanges: string[] = [
    'date',
    'datetime-local',
    'month',
    'week',
    'time',
  ];

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
      // don't parse the form model options
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

      // the field requires confirmation?
      if (_.includes(_.get(value, 'validation', []), 'confirmed')) {
        let filteredVal = _.filter(value['validation'], (rule) => {
          return rule != 'confirmed';
        });

        let confirmField = this.parse(
          { [key + '_confirmation']: Object.assign({}, value, { validation: filteredVal }) },
          langNamespace
        );

        Object.assign(parsedModel, confirmField);
      }
    });

    return parsedModel;
  }

  public parseToSearch(model: Object, allColumns: Object, translateKey: string) {
    let searchGroup: Group = {
      controls: {},
      type: 'group',
      visibility: {
        search: true
      },
      _options_: {
        label: 'Search'
      }
    };
    let optionsGroup: Group = {
      controls: {},
      type: 'group',
      visibility: {
        search: true
      },
      _options_: {
        label: 'Visible Columns'
      }
    };
    let parsedModel: Object = {};
    let columnOptions = [];
    // the object is sealed/frozen, then we make a deep clone to have a unlock one
    let copyModel: Object = _.cloneDeep(model);

    // loop over model fields and search which of them can be transformed to groups like:
    // created_at: {} => created_at: [from: {}, to: {}]
    // this is to make search by rnages on certain fields based on his type attr
    _.forOwn(copyModel, (options: any, field: string) => {
      // don't parse the form model options
      if (field == this.optionsKey) return false;

      // remove the required validation rules if any
      let fieldOptions = this.removeRequiredValidationRule(options);
      let groupOptions = {};
      let groupFields = {};

      // check if the current field can be converted to an range field,
      // like dates or number fields
      if (_.includes(this.fieldTypesForRanges, options.type)) {
        groupOptions = this.getGroupOptions(fieldOptions);
        groupFields = this.getGroupFields(fieldOptions);

        // add the field to the search group
        _.set(searchGroup, 'controls.' + field, {
          type: 'group',
          visibility: options.visibility,
          _options_: groupOptions,
          controls: groupFields,
        } as Group);
      } else {
        _.set(searchGroup, 'controls.' + field, options);
      }
    });

    // setup the columns group
    _.set(optionsGroup, 'controls.filter', {
      options: this.getColumnsOptions(allColumns, translateKey),
      type: 'checkbox-array',
      name: 'filter',
      label: 'Columnas visisibles',
      visibility: {
        search: true
      }
    });

    // setup for trashed columns if deleted_at field exists
    if (_.has(model, 'deleted_at')) {

      let trashedOptions = [
        { value: 'withTrashed', label: 'Con registros eliminados' },
        { value: 'onlyTrashed', label: 'Sólo registros eliminados' },
      ];

      _.set(optionsGroup, 'controls.trashed', {
        options: trashedOptions,
        type: 'radio',
        name: 'trashed',
        label: 'Registros eliminados',
        visibility: {
          search: true
        }
      });
    }

    // TODO: add setup for rows per page!!!

    return { search: searchGroup, options: optionsGroup };
  }

  private getColumnsOptions(columns, translationKey) {
    let columnOptions = [];
    let trans = {};
    this.translate.get(translationKey + 'fields').subscribe(val => trans = val);

    _.forOwn(columns, (column => {
      if (_.has(trans, column)) columnOptions.push({ value: column, label: _.get(trans, column) });
    }));

    return columnOptions;
  }

  private removeRequiredValidationRule(options: any) {
    if (_.has(options, 'validation')) {
      options.validation;
      _.remove(options.validation, (rule) => { return rule == 'required'; })
    }

    return options;
  }

  private getGroupOptions(fieldOptions: any): Object {
    return {
      name: fieldOptions.name,
      label: fieldOptions.label,
    };
  }

  private getGroupFields(fieldOptions: any): Object {
    let fromField = Object.assign({}, fieldOptions);
    let toField = Object.assign({}, fieldOptions);
    let group = {};

    fromField.name = fieldOptions.name + '_from';
    toField.name = fieldOptions.name + '_to';

    fromField.label = 'Desde';
    toField.label = 'Hasta';

    _.set(group, fromField.name, fromField);
    _.set(group, toField.name, toField);

    return group;
  }

  /**
   * Retrieves a FormGroup from a parsed Form Model (the result from the parse
   * method).
   *
   * @param parsedModel The parsed Form Model
   */
  public toFormGroup(parsedModel: Object): FormGroup {
    let group = {};
    let validation = [];

    _.forOwn(parsedModel, (options, field) => {
      validation = [];

      if (_.has(options, 'validation')) {
        _.each(options['validation'], (validationRule) => {
          validationRule == "required" ? validation.push(Validators.required) : null;
        });
      }

      switch (options.type) {
        case "group":
          group[field] = this.toFormGroup(options.controls);
          break;

        // TODO: setup for array groups
        case "checkbox-array":
          group[field] = [[], validation];
          break;

        default:
          group[field] = ['', validation];
          break;
      }
    });

    let form = this.formBuilder.group(group);

    return form;
  }
}
