import { NgModule } from '@angular/core';
import { HowitworksPageComponent } from './components/howitworks-page/howitworks-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';


@NgModule({
  declarations: [
    HowitworksPageComponent,
    LandingPageComponent
  ],
  imports: [
    SharedModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
