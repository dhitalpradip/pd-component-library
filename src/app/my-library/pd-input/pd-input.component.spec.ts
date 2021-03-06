import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdInputComponent } from './pd-input.component';

describe('PdInputComponent', () => {
  let component: PdInputComponent;
  let fixture: ComponentFixture<PdInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
