import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendStepperComponent } from './send-stepper.component';

describe('SendStepperComponent', () => {
  let component: SendStepperComponent;
  let fixture: ComponentFixture<SendStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
