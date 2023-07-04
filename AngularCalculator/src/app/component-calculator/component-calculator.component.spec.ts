import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCalculatorComponent } from './component-calculator.component';

describe('ComponentCalculatorComponent', () => {
  let component: ComponentCalculatorComponent;
  let fixture: ComponentFixture<ComponentCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentCalculatorComponent]
    });
    fixture = TestBed.createComponent(ComponentCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
