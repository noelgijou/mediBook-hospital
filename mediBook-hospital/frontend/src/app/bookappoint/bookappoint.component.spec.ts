import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookappointComponent } from './bookappoint.component';

describe('BookappointComponent', () => {
  let component: BookappointComponent;
  let fixture: ComponentFixture<BookappointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookappointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
