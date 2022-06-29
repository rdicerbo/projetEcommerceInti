import { TestBed } from '@angular/core/testing';

import { GestioncategorieService } from './gestioncategorie.service';

describe('GestioncategorieService', () => {
  let service: GestioncategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestioncategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
