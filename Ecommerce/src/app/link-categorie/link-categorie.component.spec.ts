import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCategorieComponent } from './link-categorie.component';

describe('LinkCategorieComponent', () => {
  let component: LinkCategorieComponent;
  let fixture: ComponentFixture<LinkCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
