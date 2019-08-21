import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecensiesComponent } from './recensies.component';

describe('RecensiesComponent', () => {
  let component: RecensiesComponent;
  let fixture: ComponentFixture<RecensiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecensiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecensiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
