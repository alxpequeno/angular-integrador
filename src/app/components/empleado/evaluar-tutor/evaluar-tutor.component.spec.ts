import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluarTutorComponent } from './evaluar-tutor.component';

describe('EvaluarTutorComponent', () => {
  let component: EvaluarTutorComponent;
  let fixture: ComponentFixture<EvaluarTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluarTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluarTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
