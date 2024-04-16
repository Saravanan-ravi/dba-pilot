import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechiesComponent } from './techies.component';

describe('TechiesComponent', () => {
  let component: TechiesComponent;
  let fixture: ComponentFixture<TechiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
