import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { AdminLTEModule as Shell } from './../../adminLTE/admin-lte.module';
import { reducer } from './../../reducers';
import { Company } from './../../core/models/company';
import { AuthUser } from './../../auth/models/authUser';
import { CoreSharedModule } from 'app/core/core.shared.module';
import { AccessToken } from 'app/auth/interfaces/accessToken';

export const IMPORTS = [
  Shell,
  ReactiveFormsModule,
  TranslateModule.forRoot(),
  StoreModule.provideStore(reducer),
  RouterTestingModule,
  CoreSharedModule,
];

export let ACCESS_TOKEN: AccessToken = {
  access_token: 'foo-token',
  expires_in: 99999,
  token_type: 'foo-type'
};

export let TEST_USER: AuthUser = Object.assign(new AuthUser, {
  'id': 1,
  'name': 'Super Admin',
  'email': 'admin@admin.com',
  'confirmed': true,
  'nickname': null,
  'gender': null,
  'birth': null,
  'visitor_id': null,
  'social_auth_provider': null,
  'social_id': null,
  'social_avatar': { 'avatar': null, 'original': null },
  'created_at': {
    'date': '2016-12-31 04:20:42.000000',
    'timezone_type': 3,
    'timezone': 'UTC'
  },
  'token': {
    token: 'foo-token'
  },
  'roles': {
    'data': [
      {
        'object': 'Role',
        'name': 'admin',
        'description': 'Super Administrator',
        'display_name': null,
        permissions: {
          data: [
            {
              object: 'Permission',
              name: 'manage-users',
              display_name: 'Manage Users',
              description: ''
            }
          ]
        }
      },
      {
        'object': 'Role',
        'name': 'author',
        'description': 'Posts Author',
        'display_name': null,
        permissions: {
          data: [
            {
              object: 'Permission',
              name: 'create-posts',
              display_name: 'Create Posts',
              description: ''
            }
          ]
        }
      },
    ]
  }
});

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
    const responseOptions = new ResponseOptions(options);
    const response = new Response(responseOptions);
    connection.mockRespond(response);
  });
}
