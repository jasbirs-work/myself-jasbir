import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonsComponent } from './custom-buttons.component';

describe('CustomButtonsComponent', () => {
  let component: CustomButtonsComponent;
  let fixture: ComponentFixture<CustomButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
