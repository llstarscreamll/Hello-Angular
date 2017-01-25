export class AuthUser {
    id: number;
    visitor_id: number;
    social_id: string;
    token: string;
    name: string;
    nickname: string;
    gender: string;
    email: string;
    roles: Object;
    birth: number;
    confirmed: boolean;
    created_at: Object;
    social_auth_provider: string;
    social_avatar: Object;
}