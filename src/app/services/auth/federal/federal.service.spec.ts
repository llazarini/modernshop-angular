import { TestBed } from '@angular/core/testing';

import { FederalService } from './federal.service';

describe('UsuarioService', () => {
  let service: FederalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FederalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
