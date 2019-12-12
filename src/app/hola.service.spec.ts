import { TestBed } from '@angular/core/testing';

import { HolaService } from './hola.service';

describe('HolaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HolaService = TestBed.get(HolaService);
    expect(service).toBeTruthy();
  });
});
