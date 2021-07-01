import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAptComponent } from './createapt.component';

describe('CreateAptComponent', () => {
  let component: CreateAptComponent;
  let fixture: ComponentFixture<CreateAptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
