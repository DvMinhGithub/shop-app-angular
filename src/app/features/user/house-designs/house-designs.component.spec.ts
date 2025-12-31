import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDesignsComponent } from './house-designs.component';

describe('HouseDesignsComponent', () => {
  let component: HouseDesignsComponent;
  let fixture: ComponentFixture<HouseDesignsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseDesignsComponent]
    });
    fixture = TestBed.createComponent(HouseDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
