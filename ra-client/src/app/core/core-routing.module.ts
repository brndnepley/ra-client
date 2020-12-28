import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowItWorksPageComponent } from '../modules/welcome/pages/howitworks-page/howitworks-page.component';
import { LandingPageComponent } from '../modules/welcome/pages/landing-page/landing-page.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: LandingPageComponent },
  { path: 'how-it-works', component: HowItWorksPageComponent },
  { path: 'send', loadChildren: () => import('../modules/send').then(mod => mod.SendModule )},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
