import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarTutoriaComponent } from './publicar-tutoria.component';

describe('PublicarTutoriaComponent', () => {
  let component: PublicarTutoriaComponent;
  let fixture: ComponentFixture<PublicarTutoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarTutoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarTutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
