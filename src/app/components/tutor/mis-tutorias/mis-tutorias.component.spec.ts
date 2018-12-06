import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTutoriasComponent } from './mis-tutorias.component';

describe('MisTutoriasComponent', () => {
  let component: MisTutoriasComponent;
  let fixture: ComponentFixture<MisTutoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisTutoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisTutoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
