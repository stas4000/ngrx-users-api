import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStepsComponent } from './main-steps.component';

describe('MainStepsComponent', () => {
  let component: MainStepsComponent;
  let fixture: ComponentFixture<MainStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
