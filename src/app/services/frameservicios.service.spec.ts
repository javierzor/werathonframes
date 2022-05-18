import { TestBed } from '@angular/core/testing';

import { FrameserviciosService } from './frameservicios.service';

describe('FrameserviciosService', () => {
  let service: FrameserviciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrameserviciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
