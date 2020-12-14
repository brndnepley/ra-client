import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreRoutingModule } from './core-routing.module';
import { LandingPageComponent } from '../landing-page/landing-page.component';


@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
