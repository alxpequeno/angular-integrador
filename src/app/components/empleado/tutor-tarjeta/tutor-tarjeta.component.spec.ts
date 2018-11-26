import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorTarjetaComponent } from './tutor-tarjeta.component';

describe('TutorTarjetaComponent', () => {
  let component: TutorTarjetaComponent;
  let fixture: ComponentFixture<TutorTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
