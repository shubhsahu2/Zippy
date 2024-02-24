import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuzinesComponent } from './cuzines.component';

describe('CuzinesComponent', () => {
  let component: CuzinesComponent;
  let fixture: ComponentFixture<CuzinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuzinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuzinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
