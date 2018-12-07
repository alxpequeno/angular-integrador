import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTutoriaComponent } from './actualizar-tutoria.component';

describe('ActualizarTutoriaComponent', () => {
  let component: ActualizarTutoriaComponent;
  let fixture: ComponentFixture<ActualizarTutoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarTutoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
