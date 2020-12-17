import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TextFieldModule } from '@angular/cdk/text-field';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    CdkStepperModule,
    MatProgressBarModule,
    TextFieldModule,
    MatCardModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    CdkStepperModule,
    MatProgressBarModule,
    TextFieldModule,
    MatCardModule,
  ]
})
export class MaterialModule { }
