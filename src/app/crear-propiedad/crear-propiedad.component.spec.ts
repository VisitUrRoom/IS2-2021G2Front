import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPropiedadComponent } from './crear-propiedad.component';

describe('CrearPropiedadComponent', () => {
  let component: CrearPropiedadComponent;
  let fixture: ComponentFixture<CrearPropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPropiedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
