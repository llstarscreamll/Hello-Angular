# Hello-Angular

Hello-Angular is a start point for a SPA with the amazing [Hello-API](https://github.com/Porto-SAP/Hello-API) as backend. Hello-API offers many features but not all of them are covered here, but maybe in the future they will be...

Here are some libraries used on this app:

- @ngrx/effects
- @ngrx/store
- @ngrx/router-store
- ng2-translate
- ReactiveForms
- ng2-bootstrap
- etc...

## Install

```bash
git clone https://github.com/llstarscreamll/Hello-Angular.git
cd Hello-Angular
cp src/environments/env.example.ts src/environments/env.ts # go to this file and fill the variables (required)
npm install
ng serve
```

Go to **http://localhost:4200** and check the app.

> You should have a endpoint on your [apiato](https://github.com/apiato/apiato) backend named `api.apiato.dev/company-info` to set the app name, something easy like this [apiato container](https://github.com/llstarscreamll/AppData). It's just a very a simple example, do it as you want!!

## Features

- Authentication:
  - login users
  - ~~register users~~, a small pregress only, not functional yet
  - guard to check if user is authenticated
- Dynamic form builder
- Basic search component
- Translations files, at the moment only Spanish is supported
- AdminLTE Theme, whit top navbar, right sidebar and center box layouts
- Public and private components that make use of the auth guard

Well, you see... there are many work to do here... I would be happy receiving help!!

### Dynamic form builder

This feature allows you build dynamic forms based on a Javascript Object. To define the fileds that the form should have, create an object like:

```Javascript
{
    // define a textbox field
    name: { // the field name
        label: 'Nombre', // the field label
        type: 'text', // the input type
        placeholder: 'tu nombre...', // placeholder for the field
        labelClass: 'my-label-class', // classes for the input label tag
        inputClass: 'my-input-class', // classes for the input
        inputGridClass: 'my-grid-class-for-input' // classes for the input wrapper
        visibility: { // with this setup the field will be shown only on create contexts
            create: true,
            datails: false,
            update: false
        }
    },
    // define a select dropdown with static options
    country: {
        label: 'Country',
        type: 'select',
        multiple: false, // it's a multiple dropdown?
        options: [ // the dropdown options
            { value: 1, label: 'Colombia' },
            { value: 2, label: 'Perú' },
        ]
    },
    // define a select dropdown with dynamic options  (given in the data ()Input component) based on another form value
    state: {
        label: 'State',
        type: 'select',
        multiple: false,
        dependantDynamicOptions: { // options depends on another field value
            field: 'country', // depends on the country field value
            data: 'departments', // the data object key where we go to filter and map to retrieve our options
            key: 'country_id' // the above object key used to filter the data
        },
    },
    // select dropdown multiple
    abilities: {
        label: 'Abilities',
        type: 'select',
        multiple: true,
        options: [
            { value: 'php', label: 'PHP' },
            { value: 'ruby', label: 'Ruby' },
            { value: 'python', label: 'Python' },
            { value: 'javascript', label: 'Javascript' },
            { value: 'css', label: 'CSS' },
            { value: 'html', label: 'HTML' },
        ]
    }
    // define a radio button
    genre: {
        label: 'Genre',
        type: 'radiobutton',
        options: [ // the options
            { value: 'm', label: 'Male' },
            { value: 'f', label: 'Female' },
        ]
    },
    // define a textarea
    comments: {
        label: 'comments',
        type: 'textarea',
    },
    // define checkbox array 
    topics: {
        label: 'Topics',
        type: 'checkbox-array',
        options: [
            { value: 'science', label: 'Science' },
            { value: 'tech', label: 'Technology' },
            { value: 'robotics', label: 'Robotics' },
            { value: 'programming', label: 'Programming' },
        ]
    },
    // single checkbox, for boolean data maybe?
    active: {
        label: 'Activate Account?',
        type: 'checkbox',
        option: { value: 'true', label: 'Yes!!' } // object, not array
    },
}
```

Taken the avobe example you should use the component like this;

```html
<app-dynamic-form   [model]="model | async"
                    [data]="formData | async"
                    [disabled]="false"
                    [visibility]="'create'"
                    [debug]="false"
                    [controls]="bookForm"></app-dynamic-form>
```

Where:

- [model] = the parsed model with the `FormModelParser` service located on `src/app/modules/core/services/localStorage.ts`.
- [data] = the form data, like the dropdown/checkboxes/radio options retreived from the API
- [disabled] = should the component render all controls as static? useful for readonly data
- [visibility] = this determines what fields will be shown based on their visibility options
- [debug] = set to true if you want to see the FormModel, FormGroup and FormData info on divs
- [controls] = the ReactiveForm controls, build manually as needed or build dynamically with `FormModelParser.toFormGroup(parsedModel)`

## Nginx Server config

Use this config to avoid `No input file especified` errors on Homestead:

```bash
location / {
    expires -1;
    add_header Pragma "no-cache";
    add_header Cache-Control "no-store, no-cache, must-revalicate, post-check=0 pre-check=0";
    root /home/ubuntu/code/dist;
    try_files $uri $uri/ /index.html =404;
    break;
}
```