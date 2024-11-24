import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSinFooterComponent } from './layout-sin-footer.component';

describe('LayoutSinFooterComponent', () => {
  let component: LayoutSinFooterComponent;
  let fixture: ComponentFixture<LayoutSinFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutSinFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutSinFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
