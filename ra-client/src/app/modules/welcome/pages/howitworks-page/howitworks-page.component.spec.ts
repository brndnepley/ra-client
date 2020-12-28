import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowItWorksPageComponent } from './howitworks-page.component';

describe('HowitworksPageComponent', () => {
  let component: HowItWorksPageComponent;
  let fixture: ComponentFixture<HowItWorksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowItWorksPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
