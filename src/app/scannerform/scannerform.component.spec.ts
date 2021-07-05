import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerFormComponent } from './scannerform.component';

describe('ScannerFormComponent', () => {
  let component: ScannerFormComponent;
  let fixture: ComponentFixture<ScannerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScannerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
