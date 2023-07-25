import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyCostComponent } from './add-daily-cost.component';

describe('AddDailyCostComponent', () => {
  let component: AddDailyCostComponent;
  let fixture: ComponentFixture<AddDailyCostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDailyCostComponent]
    });
    fixture = TestBed.createComponent(AddDailyCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
