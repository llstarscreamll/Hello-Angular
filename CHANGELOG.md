# Relsease Notes

## 0.3 (2017-06-13)

### Added

- Add `CHANGELOG.md` file.

## 0.2 (2017-06-13)

### Added

- Add new feature git submodule [validation](https://github.com/llstarscreamll/ngx-validation) for forms validation errors handling.
- Add environment variables to set app and company info.

### Changed

- Move adminLTE, auth and dynamic-form feature modules to their own repos for delivering more often updates and make it easy to clone on other projects, here are the repos links:
    - [adminLTE](https://github.com/llstarscreamll/ngx-adminLte), the main app layout.
    - [auth](https://github.com/llstarscreamll/ngx-auth), auth and acl stuff.
    - [dynamic-form](https://github.com/llstarscreamll/ngx-dynamic-form), dynamic forms builder.

### Removed

- Remove the **layout** ngrx store stuff.
- Remove the **appData** ngrx stuff, now environment values are used.