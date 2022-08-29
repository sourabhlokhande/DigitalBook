import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOperationComponent } from './book-operation.component';

describe('BookOperationComponent', () => {
  let component: BookOperationComponent;
  let fixture: ComponentFixture<BookOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
