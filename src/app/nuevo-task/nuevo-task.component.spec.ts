import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTaskComponent } from './nuevo-task.component';

describe('NuevoTaskComponent', () => {
  let component: NuevoTaskComponent;
  let fixture: ComponentFixture<NuevoTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
