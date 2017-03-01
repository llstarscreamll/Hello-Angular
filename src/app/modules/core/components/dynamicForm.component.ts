import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import * as _ from "lodash";

@Component({
    moduleId: module.id,
    selector: 'app-dynamic-form',
    templateUrl: './dynamicForm.component.html'
})
export class DynamicFormcomponent implements OnInit {
    
    @Input() model: Object = {
        name: {
            label: 'Nombre',
            type: 'text',
            placeholder: 'tu nombre...'
        },
        country: {
            label: 'Pais',
            type: 'select',
            multiple: false,
            placeholder: 'Seleccione...',
            options: [
                { value: 1, label: 'Colombia' },
                { value: 2, label: 'Perú' },
            ]
        },
        department: {
            label: 'Departamento',
            type: 'select',
            multiple: false,
            placeholder: 'Seleccione...',
            dynamicOptions: { field: 'country', data: 'departments', key: 'country_id' },
        },
        genre: {
            label: 'Género',
            type: 'radiobutton',
            options: [
                { value: 'm', label: 'Masculino' },
                { value: 'f', label: 'Femenino' },
            ]
        },
        comments: {
            label: 'Comentarios',
            type: 'textarea',
        },
        areas: {
            label: 'Áreas',
            type: 'checkbox-array',
            options: [
                { value: 'ciencie', label: 'Ciencia' },
                { value: 'tech', label: 'Tecnología' },
                { value: 'tobotics', label: 'Robotica' },
            ]
        },
        active: {
            label: 'Activo?',
            type: 'checkbox',
            option: { value: 'true', label: 'Si' }
        },
        interests: {
            label: 'Intereses',
            type: 'select',
            multiple: true,
            options: [
                { value: 'musica', label: 'musica' },
                { value: 'arte', label: 'arte' },
                { value: 'agricultura', label: 'agricultura' },
                { value: 'foo', label: 'foo' },
                { value: 'bar', label: 'bar' },
            ]
        }
    };

    @Input() data: Object = {
        departments: [
            { id: 1, name: 'Boyacá', country_id: 1 },
            { id: 2, name: 'Casanare', country_id: 1 },
            { id: 10, name: 'Lima', country_id: 2 },
            { id: 20, name: 'Arequipa', country_id: 2 },
        ]
    };

    @Input() controls: FormGroup;

    public defaultAreas = ['cience'];

    constructor(private fb: FormBuilder) { }
    ngOnInit() {
        this.controls = this.fb.group({
            name: [null] ,
            country: [2],
            department: [20],
            genre: [null],
            comments: [null],
            active: [false],
            areas: [[]],
            interests: [[]]
        });
    }

    getModelKeys(){
        return Object.keys(this.model);
    }

    toggleArrayControlItemValue(item: any, value: any)
    {
        let index = this.controls.get(item).value.indexOf(value);

        if(index > -1){
            this.controls.get(item).value.splice(index, 1);
        } else {
            this.controls.get(item).value.push(value);
        }
    }
}