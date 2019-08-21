import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BruggeComponent } from './brugge.component';

describe('BruggeComponent', () => {
  let component: BruggeComponent;
  let fixture: ComponentFixture<BruggeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BruggeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BruggeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
