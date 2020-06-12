import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorInfoCardComponent } from './color-info-card.component';

describe('ColorInfoCardComponent', () => {
  let component: ColorInfoCardComponent;
  let fixture: ComponentFixture<ColorInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
