import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyTestComponent } from './udemy-test.component';

describe('UdemyTestComponent', () => {
  let component: UdemyTestComponent;
  let fixture: ComponentFixture<UdemyTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UdemyTestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
