import { NgModule } from '@angular/core';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HowItWorksPageComponent} from './pages/howitworks-page/howitworks-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    HowItWorksPageComponent
  ],
  imports: [
    SharedModule
  ]
})
export class WelcomeModule { }
