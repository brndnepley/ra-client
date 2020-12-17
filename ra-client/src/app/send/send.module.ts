import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SendPageComponent } from './components/send-page/send-page.component';
import { SendRoutingModule } from './send-routing.module';
import { SendStepperComponent } from './components/send-stepper/send-stepper.component';
import { LetterModule } from '../letter/letter.module';

@NgModule({
  declarations: [
    SendPageComponent,
    SendStepperComponent
  ],
  imports: [
    SharedModule,
    LetterModule,
    SendRoutingModule
  ]
})
export class SendModule { }
