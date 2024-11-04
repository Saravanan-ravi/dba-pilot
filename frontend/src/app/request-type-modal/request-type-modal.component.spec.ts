import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTypeModalComponent } from './request-type-modal.component';

describe('RequestTypeModalComponent', () => {
  let component: RequestTypeModalComponent;
  let fixture: ComponentFixture<RequestTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestTypeModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
