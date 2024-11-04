import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorComponent } from './hor.component';

describe('HorComponent', () => {
  let component: HorComponent;
  let fixture: ComponentFixture<HorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
