import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonthlyCostComponent } from './add-monthly-cost.component';

describe('AddMonthlyCostComponent', () => {
  let component: AddMonthlyCostComponent;
  let fixture: ComponentFixture<AddMonthlyCostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMonthlyCostComponent]
    });
    fixture = TestBed.createComponent(AddMonthlyCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
