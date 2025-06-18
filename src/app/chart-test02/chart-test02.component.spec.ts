import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTest02Component } from './chart-test02.component';

describe('ChartTest02Component', () => {
  let component: ChartTest02Component;
  let fixture: ComponentFixture<ChartTest02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartTest02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartTest02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
