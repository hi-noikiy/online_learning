import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoBannerComponent } from './userinfo-banner.component';

describe('UserinfoBannerComponent', () => {
  let component: UserinfoBannerComponent;
  let fixture: ComponentFixture<UserinfoBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinfoBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
