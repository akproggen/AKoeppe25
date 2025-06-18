import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTest01Component } from './chart-test01.component';

describe('ChartTest01Component', () => {
  let component: ChartTest01Component;
  let fixture: ComponentFixture<ChartTest01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartTest01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartTest01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
