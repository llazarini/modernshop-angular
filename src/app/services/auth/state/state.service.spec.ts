import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';

describe('UsuarioService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
