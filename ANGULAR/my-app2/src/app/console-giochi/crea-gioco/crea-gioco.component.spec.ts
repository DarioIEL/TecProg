import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaGiocoComponent } from './crea-gioco.component';

describe('CreaGiocoComponent', () => {
  let component: CreaGiocoComponent;
  let fixture: ComponentFixture<CreaGiocoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreaGiocoComponent]
    });
    fixture = TestBed.createComponent(CreaGiocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
