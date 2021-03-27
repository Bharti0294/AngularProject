import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartFeatureComponent } from './start-feature.component';

describe('StartFeatureComponent', () => {
  let component: StartFeatureComponent;
  let fixture: ComponentFixture<StartFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
