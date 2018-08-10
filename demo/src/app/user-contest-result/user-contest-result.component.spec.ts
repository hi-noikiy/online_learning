import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContestResultComponent } from './user-contest-result.component';

describe('UserContestResultComponent', () => {
  let component: UserContestResultComponent;
  let fixture: ComponentFixture<UserContestResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContestResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
