import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContestReportComponent } from './user-contest-report.component';

describe('UserContestReportComponent', () => {
  let component: UserContestReportComponent;
  let fixture: ComponentFixture<UserContestReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContestReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
