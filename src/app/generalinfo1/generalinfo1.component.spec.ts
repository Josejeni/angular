import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generalinfo1Component } from './generalinfo1.component';

describe('Generalinfo1Component', () => {
  let component: Generalinfo1Component;
  let fixture: ComponentFixture<Generalinfo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Generalinfo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Generalinfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
