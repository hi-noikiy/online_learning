import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathBoxComponent } from './path-box.component';

describe('PathBoxComponent', () => {
  let component: PathBoxComponent;
  let fixture: ComponentFixture<PathBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
