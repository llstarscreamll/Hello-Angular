import { FrontModule } from './front/front.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { CoreSharedModule } from 'app/core/core.shared.module';
import { WelcomeModule } from './welcome/welcome.module';

export const MODULES = [
  CoreSharedModule,
  CoreModule,
  FrontModule,
  AuthModule,
  WelcomeModule,
];
