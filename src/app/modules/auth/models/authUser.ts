export class AuthUser {
    public id: number;
    public visitior_id: number;
    public social_id: string;
    public token: string;
    public name: string;
    public nickname: string;
    public gender: string;
    public email: string;
    public roles: Object;
    public birth: number;
    public confirmed: boolean;
    public created_at: Object;
    public social_auth_provider: string;
    public social_avatar: Object;
}