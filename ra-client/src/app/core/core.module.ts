import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreRoutingModule } from './core-routing.module';
import { LandingModule } from '../landing/landing.module';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule,
    LandingModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
