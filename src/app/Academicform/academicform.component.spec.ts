import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicformComponent } from './academicform.component';

describe('AcademicformComponent', () => {
  let component: AcademicformComponent;
  let fixture: ComponentFixture<AcademicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
