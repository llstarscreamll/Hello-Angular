# Hello-Angular

This project is a start point to develop Angular apps with [apiato](https://github.com/apiato/apiato) as backend. At the moment the **apiato supported version is 4.0.2**, check apiato, it's a great project!!. This project uses **Angular 4**.

Some libraries used on this project:

- ReactiveForms
- angular2-jwt
- @ngrx/core
- @ngrx/effects
- @ngrx/router-store
- @ngrx/store
- @ngx-translate/core
- @ngrx/store-devtools
- ngrx-store-freeze
- ngx-bootstrap
- bootstrap, css stuffs only
- admin-lte, css stuffs only
- jquery, for the [datetime picker](http://eonasdan.github.io/bootstrap-datetimepicker/) plugin only
- font-awesome
- ionicons
- etc...

## Install

The install is as usual on any [angular-cli](https://github.com/angular/angular-cli) project:

```bash
git clone https://github.com/llstarscreamll/Hello-Angular.git
cd Hello-Angular
yarn install # or npm install
ng serve
```

Now go to [http://localhost:4200](http://localhost:4200) and test the app.

## Features

There is a lot of work to do, so, at the moment these features are implemented:

- auth module:
  - Login, request access token and request authenticate user data
  - Logout
  - Register, not complete, only has the view
  - AuthGuard, to protecting certain routes
- adminLTE module, basic implementation of the well know Bootstrap AdminLTE template
  - Right sidebar layout
  - Top navigation layout
  - Clean center box layout
  - Some components that are used on app sections like:
    - alerts, conected to the app msg system
    - box (with loading state), box header, box body, box footer and box tools (collapse box, hide box and append more tools)
    - control sidebar
    - page header and content
    - user account menu, displays user info if user is authenticated or signin and signup if isn't authenticated
- core module
  - Retrieve app info like name, shortname, website, etc... from the apiato backend. apiato doesn't not provide that functionality, so you need to create a `Container` to serve the required data or use [this one](https://github.com/llstarscreamll/AppData), this is a very basic example, complicate it as you want.
  - Share some functionalities/classes/interfaces with other modules, like mesagges, etc...
- front and welcome module
  - Just a simple concept proof for the AuthGuard stuff
- dynamic-form-fields module
  - This module is inspired on this amazing post from Todd Motto: [Configurable Reactive Forms in Angular with dynamic components](https://toddmotto.com/angular-dynamic-components-forms)
  - Build your form fields from a given config object, the supported fields are:
    - standart inputs for text, number, date, month, week, time
    - radiobuttons
    - checkbox array
    - datetime, with a [jQuery datetime picker plugin](http://eonasdan.github.io/bootstrap-datetimepicker/) wrapped on a directive
    - basic group of the above fields
  - Service that parses the given object to make usable with the main contaner component
  - Here is an example of a model, this gives you an idea of what settings are used and what is generated:
```json
{
  "id": {
    "name": "id",
    "type": "text",
    "placeholder": "",
    "value": "",
    "min": "",
    "max": "",
    "mainWrapperClass": "col-sm-6",
    "labelClass": "",
    "controlWrapperClass": "",
    "controlClass": "",
    "break": true,
    "visibility": {
      "create": false,
      "details": true,
      "edit": false,
      "search": true
    },
    "label": "Id"
  },
  "name": {
    "name": "name",
    "type": "text",
    "placeholder": "",
    "value": "",
    "min": "",
    "max": "",
    "mainWrapperClass": "col-sm-6",
    "labelClass": "",
    "controlWrapperClass": "",
    "controlClass": "",
    "break": false,
    "visibility": {
      "create": true,
      "details": true,
      "edit": true,
      "search": true
    },
    "validation": [
      "required",
      "string"
    ],
    "label": "Nombre"
  },
  "short_name": {
    "name": "short_name",
    "type": "text",
    "placeholder": "",
    "value": "",
    "min": "",
    "max": "",
    "mainWrapperClass": "col-sm-6",
    "labelClass": "",
    "controlWrapperClass": "",
    "controlClass": "",
    "break": false,
    "visibility": {
      "create": true,
      "details": true,
      "edit": true,
      "search": true
    },
    "validation": [
      "string"
    ],
    "label": "Nombre corto"
  },
  "created_at": {
    "name": "created_at",
    "type": "datetime-local",
    "placeholder": "",
    "value": "",
    "min": "",
    "max": "",
    "mainWrapperClass": "col-sm-6",
    "labelClass": "",
    "controlWrapperClass": "",
    "controlClass": "",
    "break": false,
    "visibility": {
      "create": false,
      "details": true,
      "edit": false,
      "search": true
    },
    "label": "Creado en"
  },
  "updated_at": {
    "name": "updated_at",
    "type": "datetime-local",
    "placeholder": "",
    "value": "",
    "min": "",
    "max": "",
    "mainWrapperClass": "col-sm-6",
    "labelClass": "",
    "controlWrapperClass": "",
    "controlClass": "",
    "break": false,
    "visibility": {
      "create": false,
      "details": true,
      "edit": false,
      "search": true
    },
    "label": "Actualizado en"
  },
  "deleted_at": {
    "name": "deleted_at",
    "type": "datetime-local",
    "placeholder": "",
    "value": "",
    "min": "",
    "max": "",
    "mainWrapperClass": "col-sm-6",
    "labelClass": "",
    "controlWrapperClass": "",
    "controlClass": "",
    "break": false,
    "visibility": {
      "create": false,
      "details": true,
      "edit": false,
      "search": true
    },
    "label": "Eliminado en"
  }
}
```

## Tests

The app is covred with several tests, run them by executing `ng tests`.

## Contribution

There is a lot of work to do, contributions are welcome!!

## License

The MIT License [MIT](https://opensource.org/licenses/MIT).