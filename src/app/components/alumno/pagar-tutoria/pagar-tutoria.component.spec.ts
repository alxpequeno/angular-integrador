import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarTutoriaComponent } from './pagar-tutoria.component';

describe('PagarTutoriaComponent', () => {
  let component: PagarTutoriaComponent;
  let fixture: ComponentFixture<PagarTutoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarTutoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarTutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
