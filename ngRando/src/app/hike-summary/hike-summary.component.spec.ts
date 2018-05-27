import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeSummaryComponent } from './hike-summary.component';

describe('HikeSummaryComponent', () => {
  let component: HikeSummaryComponent;
  let fixture: ComponentFixture<HikeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
