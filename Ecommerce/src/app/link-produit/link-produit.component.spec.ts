import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkProduitComponent } from './link-produit.component';

describe('LinkProduitComponent', () => {
  let component: LinkProduitComponent;
  let fixture: ComponentFixture<LinkProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
