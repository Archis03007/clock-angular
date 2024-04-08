import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDisplayComponent } from './change-display.component';

describe('ChangeDisplayComponent', () => {
  let component: ChangeDisplayComponent;
  let fixture: ComponentFixture<ChangeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
