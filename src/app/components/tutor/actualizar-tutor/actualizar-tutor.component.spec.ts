import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTutorComponent } from './actualizar-tutor.component';

describe('ActualizarTutorComponent', () => {
  let component: ActualizarTutorComponent;
  let fixture: ComponentFixture<ActualizarTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
