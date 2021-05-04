import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockGridComponent } from './stock-grid.component';

describe('StockGridComponent', () => {
  let component: StockGridComponent;
  let fixture: ComponentFixture<StockGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
