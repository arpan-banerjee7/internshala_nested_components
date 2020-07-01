import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentXComponent } from './component-x.component';

describe('ComponentXComponent', () => {
  let component: ComponentXComponent;
  let fixture: ComponentFixture<ComponentXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
