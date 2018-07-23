import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHandpickCourseComponent } from './home-handpick-course.component';

describe('HomeHandpickCourseComponent', () => {
  let component: HomeHandpickCourseComponent;
  let fixture: ComponentFixture<HomeHandpickCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHandpickCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHandpickCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
