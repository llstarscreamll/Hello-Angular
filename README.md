# Angular2AdminLte

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.25.5.

### Nginx server configuration

```
# Default server configuration
#
server {
	listen 80 default_server;
	listen [::]:80 default_server;

	# root /var/www/html;
	root /home/ubuntu/code/dist;

	# Add index.php to the list if you are using PHP
	index index.html index.htm index.nginx-debian.html;

	server_name _;

	location / {
		expires -1;
		add_header Pragma "no-cache";
		add_header Cache-Control "no-store, no-cache, must-revalicate, post-check=0 pre-check=0";
		root /home/ubuntu/code/dist;
		try_files $uri $uri/ /index.html =404;
		break;
	}

	gzip on;
	gzip_http_version 1.1;
	gzip_disable      "MSIE [1-6]\.";
	gzip_min_length   1100;
	gzip_vary         on;
	gzip_proxied      expired no-cache no-store private auth;
	gzip_types        text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript;
	gzip_comp_level   9;
}

```

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
