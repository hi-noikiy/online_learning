import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSideBoxComponent } from './user-side-box.component';

describe('UserSideBoxComponent', () => {
  let component: UserSideBoxComponent;
  let fixture: ComponentFixture<UserSideBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSideBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSideBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
