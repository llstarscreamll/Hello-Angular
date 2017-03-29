import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from 'ng2-translate';

import { AdminLTEShellModule as Shell } from './../../adminLTE/admin-lte.module';
import { reducer } from './../../reducers';
import { Company } from './../../core/models/company';
import { AuthUser } from './../../auth/models/authUser';

export const IMPORTS = [
  Shell,
  ReactiveFormsModule,
  TranslateModule.forRoot(),
  StoreModule.provideStore(reducer),
  RouterTestingModule
];

export const TEST_USER: AuthUser = {
  "id": 1,
  "name": "Super Admin",
  "email": "admin@admin.com",
  "confirmed": true,
  "nickname": null,
  "gender": null,
  "birth": null,
  "visitor_id": null,
  "social_auth_provider": null,
  "social_id": null,
  "social_avatar": { "avatar": null, "original": null },
  "created_at": {
    "date": "2016-12-31 04:20:42.000000",
    "timezone_type": 3,
    "timezone": "UTC"
  },
  "token": {
    token: "foo-token"
  },
  "roles": {
    "data": [
      { "object": "Role", "name": "admin", "description": "Super Administrator", "display_name": null }
    ]
  }
};

export const COMPANY: Company = {
  fullname: 'ACME Inc.',
  short_name: 'ACME',
  big_name: 'ACME',
  small_name: 'Inc.',
  cc_year: '2017',
  website: 'www.acme.com'
};

// helper function to MockBackend responses
export function setupConnections(backend: MockBackend, options: any) {
  backend.connections.subscribe((connection: MockConnection) => {
    let responseOptions = new ResponseOptions(options);
    let response = new Response(responseOptions);
    connection.mockRespond(response);
  });
}
