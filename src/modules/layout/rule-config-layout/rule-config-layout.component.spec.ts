import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleConfigLayoutComponent } from './rule-config-layout.component';

describe('RuleConfigLayoutComponent', () => {
  let component: RuleConfigLayoutComponent;
  let fixture: ComponentFixture<RuleConfigLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleConfigLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleConfigLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
