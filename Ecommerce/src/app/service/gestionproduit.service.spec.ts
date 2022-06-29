import { TestBed } from '@angular/core/testing';

import { GestionproduitService } from './gestionproduit.service';

describe('GestionproduitService', () => {
  let service: GestionproduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionproduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
