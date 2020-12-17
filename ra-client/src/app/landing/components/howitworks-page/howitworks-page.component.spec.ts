import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowitworksPageComponent } from './howitworks-page.component';

describe('HowitworksPageComponent', () => {
  let component: HowitworksPageComponent;
  let fixture: ComponentFixture<HowitworksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowitworksPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowitworksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
