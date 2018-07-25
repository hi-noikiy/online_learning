import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLearnedCoursesComponent } from './user-learned-courses.component';

describe('UserLearnedCoursesComponent', () => {
  let component: UserLearnedCoursesComponent;
  let fixture: ComponentFixture<UserLearnedCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLearnedCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLearnedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
