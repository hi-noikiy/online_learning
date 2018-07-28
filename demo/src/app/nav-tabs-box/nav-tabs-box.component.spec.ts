import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTabsBoxComponent } from './nav-tabs-box.component';

describe('NavTabsBoxComponent', () => {
  let component: NavTabsBoxComponent;
  let fixture: ComponentFixture<NavTabsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTabsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTabsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
