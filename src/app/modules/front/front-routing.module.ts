import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front.component';
import { LandingPageComponent }  from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/front/landing' },
  { path: 'front', component: FrontComponent,
    children: [
      { path: 'landing', component: LandingPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FrontRoutingModule { }
