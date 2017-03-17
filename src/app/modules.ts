import { FrontModule } from './front/front.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { WelcomeModule } from './welcome/welcome.module';

export const MODULES = [
    CoreModule,
    FrontModule,
    AuthModule,
    WelcomeModule,
];
