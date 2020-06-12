import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsMeterComponent } from './skills-meter.component';

describe('SkillsMeterComponent', () => {
  let component: SkillsMeterComponent;
  let fixture: ComponentFixture<SkillsMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
