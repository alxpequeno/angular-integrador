import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTutorComponent } from './registrar-tutor.component';

describe('RegistrarTutorComponent', () => {
  let component: RegistrarTutorComponent;
  let fixture: ComponentFixture<RegistrarTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
