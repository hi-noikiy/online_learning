import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateContestComponent } from './user-create-contest.component';

describe('UserCreateContestComponent', () => {
  let component: UserCreateContestComponent;
  let fixture: ComponentFixture<UserCreateContestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreateContestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
