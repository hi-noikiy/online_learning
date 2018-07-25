import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInfoboxComponent } from './course-infobox.component';

describe('CourseInfoboxComponent', () => {
  let component: CourseInfoboxComponent;
  let fixture: ComponentFixture<CourseInfoboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInfoboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInfoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
