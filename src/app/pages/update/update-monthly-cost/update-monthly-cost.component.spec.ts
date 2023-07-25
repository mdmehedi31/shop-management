import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMonthlyCostComponent } from './update-monthly-cost.component';

describe('UpdateMonthlyCostComponent', () => {
  let component: UpdateMonthlyCostComponent;
  let fixture: ComponentFixture<UpdateMonthlyCostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMonthlyCostComponent]
    });
    fixture = TestBed.createComponent(UpdateMonthlyCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
