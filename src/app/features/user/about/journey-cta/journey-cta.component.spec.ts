import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyCtaComponent } from './journey-cta.component';

describe('JourneyCtaComponent', () => {
  let component: JourneyCtaComponent;
  let fixture: ComponentFixture<JourneyCtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JourneyCtaComponent]
    });
    fixture = TestBed.createComponent(JourneyCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
