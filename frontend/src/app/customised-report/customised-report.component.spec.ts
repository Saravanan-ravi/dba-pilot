import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomisedReportComponent } from './customised-report.component';

describe('CustomisedReportComponent', () => {
  let component: CustomisedReportComponent;
  let fixture: ComponentFixture<CustomisedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomisedReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomisedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
