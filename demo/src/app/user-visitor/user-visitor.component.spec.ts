import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVisitorComponent } from './user-visitor.component';

describe('UserVisitorComponent', () => {
  let component: UserVisitorComponent;
  let fixture: ComponentFixture<UserVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
