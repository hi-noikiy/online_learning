import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCenterFollowComponent } from './user-center-follow.component';

describe('UserCenterFollowComponent', () => {
  let component: UserCenterFollowComponent;
  let fixture: ComponentFixture<UserCenterFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCenterFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCenterFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
