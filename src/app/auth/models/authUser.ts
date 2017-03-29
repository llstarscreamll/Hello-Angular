import { Timestamps } from './../../core/models/date';

export class AuthUser {
    id: number;
    visitor_id: number;
    social_id: string;
    token: { token };
    name: string;
    nickname: string;
    gender: string;
    email: string;
    roles: Object;
    birth: number;
    confirmed: boolean;
    social_auth_provider: string;
    social_avatar: Object;
    created_at: Timestamps;
}