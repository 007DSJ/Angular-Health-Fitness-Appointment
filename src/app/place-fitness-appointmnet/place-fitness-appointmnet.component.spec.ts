import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceFitnessAppointmnetComponent } from './place-fitness-appointmnet.component';

describe('PlaceFitnessAppointmnetComponent', () => {
  let component: PlaceFitnessAppointmnetComponent;
  let fixture: ComponentFixture<PlaceFitnessAppointmnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceFitnessAppointmnetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceFitnessAppointmnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
