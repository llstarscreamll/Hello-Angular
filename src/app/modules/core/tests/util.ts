import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from 'ng2-translate';

import { AdminLTEShellModule as Shell } from './../../../shells/adminLTE/admin-lte.module';
import { reducer } from './../reducers';

export const IMPORTS = [
    Shell,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    StoreModule.provideStore(reducer),
    RouterTestingModule
];

export const TEST_USER = {
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
    "token": "test-token-for-the-user",
    "roles": {
        "data": [
            { "object": "Role", "name": "admin", "description": "Super Administrator", "display_name": null }
        ]
    }
};
