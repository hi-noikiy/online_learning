import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestBoxComponent } from './contest-box.component';

describe('ContestBoxComponent', () => {
  let component: ContestBoxComponent;
  let fixture: ComponentFixture<ContestBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
