import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CtaColorsComponent } from './cta-colors.component'

describe('CtaColorsComponent', () => {
  let component: CtaColorsComponent
  let fixture: ComponentFixture<CtaColorsComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtaColorsComponent]
    })
    fixture = TestBed.createComponent(CtaColorsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
