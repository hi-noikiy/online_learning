import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateCourseComponent } from './user-create-course.component';

describe('UserCreateCourseComponent', () => {
  let component: UserCreateCourseComponent;
  let fixture: ComponentFixture<UserCreateCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreateCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
