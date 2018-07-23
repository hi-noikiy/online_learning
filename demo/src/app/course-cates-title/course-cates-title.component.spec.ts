import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCatesTitleComponent } from './course-cates-title.component';

describe('CourseCatesTitleComponent', () => {
  let component: CourseCatesTitleComponent;
  let fixture: ComponentFixture<CourseCatesTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCatesTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCatesTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
