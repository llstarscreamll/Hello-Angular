// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { AdminLTEModule } from 'app/adminLTE/admin-lte.module';

export const environment = {
  production: false,
  theme: AdminLTEModule,
  api_url: 'http://api.apiato.dev/',
  default_lang: 'es',
  // app info
  app_fullname: 'ACME Inc.',
  app_short_name: 'ACME',
  app_version: 0.4,
  // your company info
  company_website: 'www.google.com',
  company_cc_year: '2017',
};
