import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSeatComponent } from './find-seat.component';

describe('FindSeatComponent', () => {
  let component: FindSeatComponent;
  let fixture: ComponentFixture<FindSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindSeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
