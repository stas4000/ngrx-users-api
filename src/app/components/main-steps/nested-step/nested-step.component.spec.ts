import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedStepComponent } from './nested-step.component';

describe('NestedStepComponent', () => {
  let component: NestedStepComponent;
  let fixture: ComponentFixture<NestedStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
