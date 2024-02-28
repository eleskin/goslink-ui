import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoslinkButtonComponent } from './goslink-button.component';

describe('GoslinkButtonComponent', () => {
  let component: GoslinkButtonComponent;
  let fixture: ComponentFixture<GoslinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoslinkButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoslinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
