import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareOddComponent } from './square-odd.component';

describe('SquareOddComponent', () => {
  let component: SquareOddComponent;
  let fixture: ComponentFixture<SquareOddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareOddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareOddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
