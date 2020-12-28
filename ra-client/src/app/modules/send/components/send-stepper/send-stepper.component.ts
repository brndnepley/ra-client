import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-stepper',
  templateUrl: './send-stepper.component.html',
  styleUrls: ['./send-stepper.component.css'],
  providers: [{ provide: CdkStepper, useExisting: SendStepperComponent }]
})
export class SendStepperComponent extends CdkStepper implements OnInit{

  @Input() stepTitles: string[] = [];

  ngOnInit(): void {
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
