import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetcategorieComponent } from './setcategorie.component';

describe('SetcategorieComponent', () => {
  let component: SetcategorieComponent;
  let fixture: ComponentFixture<SetcategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetcategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
