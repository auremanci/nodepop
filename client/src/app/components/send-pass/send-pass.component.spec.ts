import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPassComponent } from './send-pass.component';

describe('SendPassComponent', () => {
  let component: SendPassComponent;
  let fixture: ComponentFixture<SendPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
