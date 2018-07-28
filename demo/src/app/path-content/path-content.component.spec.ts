import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathContentComponent } from './path-content.component';

describe('PathContentComponent', () => {
  let component: PathContentComponent;
  let fixture: ComponentFixture<PathContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
