import { FrontModule } from './front/front.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { CompanyModule } from './company/company.module';
import { PayrollModule } from './payroll/payroll.module';
import { WelcomeModule } from './welcome/welcome.module';
import { ColombianParameterModule } from './colombian-parameter/colombian-parameter.module';

export const MODULES = [
    CoreModule,
    FrontModule,
    AuthModule,
    CompanyModule,
    PayrollModule,
    WelcomeModule,
    ColombianParameterModule,
];
