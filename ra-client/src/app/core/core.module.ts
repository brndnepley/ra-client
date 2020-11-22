import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
