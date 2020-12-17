import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowitworksPageComponent } from '../landing/components/howitworks-page/howitworks-page.component';
import { LandingPageComponent } from '../landing/components/landing-page/landing-page.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: LandingPageComponent },
  { path: 'howitworks', component: HowitworksPageComponent },
  { path: 'send', loadChildren: () => import('../send').then(mod => mod.SendModule) },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
