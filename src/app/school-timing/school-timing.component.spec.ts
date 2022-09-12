import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTimingComponent } from './school-timing.component';

describe('SchoolTimingComponent', () => {
  let component: SchoolTimingComponent;
  let fixture: ComponentFixture<SchoolTimingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolTimingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
