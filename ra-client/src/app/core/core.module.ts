import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CoreComponent } from './components/core.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreRoutingModule } from './core-routing.module';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { WelcomeModule } from '../modules/welcome';

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
    WelcomeModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
