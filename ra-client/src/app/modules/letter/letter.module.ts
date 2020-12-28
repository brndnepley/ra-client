import { NgModule } from '@angular/core';
import { LetterPageComponent } from './pages/letter-page/letter-page.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LetterPageComponent,
    TextInputComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    LetterPageComponent
  ]
})
export class LetterModule { }
