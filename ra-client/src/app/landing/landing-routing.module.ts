import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HowitworksPageComponent } from './components/howitworks-page/howitworks-page.component';

const landingRoutes: Routes = [
  { path: 'welcome', component: LandingPageComponent },
  { path: 'howitworks', component: HowitworksPageComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(landingRoutes)]
})
export class LandingRoutingModule { }
