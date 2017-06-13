# Hello-Angular

This project is a start point to develop Angular apps with [apiato](https://github.com/apiato/apiato) as backend. At the moment the **apiato supported version is 4.0.2**, checkout apiato, it's a great project!!. This project uses **Angular 4**.

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
- font-awesome
- etc...

## Install

The install is as usual on any [angular-cli](https://github.com/angular/angular-cli) project:

```bash
git clone https://github.com/llstarscreamll/Hello-Angular.git
git submodule init && git submodule update --remote
cd Hello-Angular
yarn install # or npm install
ng serve
```

Now go to [http://localhost:4200](http://localhost:4200) and test the app.

## Features

The main features of this project have been moved to their own repos, so git submodules are used to deliver updates more often, check those repos to see detailed modules feaures:

- [adminLTE](https://github.com/llstarscreamll/ngx-adminLte), the main app layout
- [auth](https://github.com/llstarscreamll/ngx-auth), auth and acl stuff
- [validation](https://github.com/llstarscreamll/ngx-validation), forms validation errors handling
- [dynamic-form](https://github.com/llstarscreamll/ngx-dynamic-form), dynamic forms builder

## Tests

The app and the submodules has some tests:

```bash
ng tests
```

## Contribution

There is a lot of work to do, contributions are welcome!!

## License

The MIT License [MIT](https://opensource.org/licenses/MIT).
