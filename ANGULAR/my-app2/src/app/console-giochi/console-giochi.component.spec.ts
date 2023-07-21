import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleGiochiComponent } from './console-giochi.component';

describe('ConsoleGiochiComponent', () => {
  let component: ConsoleGiochiComponent;
  let fixture: ComponentFixture<ConsoleGiochiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleGiochiComponent]
    });
    fixture = TestBed.createComponent(ConsoleGiochiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
