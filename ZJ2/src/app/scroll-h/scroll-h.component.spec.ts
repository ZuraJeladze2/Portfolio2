import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollHComponent } from './scroll-h.component';

describe('ScrollHComponent', () => {
  let component: ScrollHComponent;
  let fixture: ComponentFixture<ScrollHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollHComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
