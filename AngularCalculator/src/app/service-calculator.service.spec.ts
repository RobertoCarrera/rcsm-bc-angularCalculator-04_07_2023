import { TestBed } from '@angular/core/testing';

import { ServiceCalculatorService } from './service-calculator.service';

describe('ServiceCalculatorService', () => {
  let service: ServiceCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
