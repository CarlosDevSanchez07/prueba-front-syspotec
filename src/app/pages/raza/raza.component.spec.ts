import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaComponent } from './raza.component';

describe('RazaComponent', () => {
  let component: RazaComponent;
  let fixture: ComponentFixture<RazaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RazaComponent]
    });
    fixture = TestBed.createComponent(RazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
