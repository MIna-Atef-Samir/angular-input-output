import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeatures2Component } from './user-features2.component';

describe('UserFeatures2Component', () => {
  let component: UserFeatures2Component;
  let fixture: ComponentFixture<UserFeatures2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFeatures2Component]
    });
    fixture = TestBed.createComponent(UserFeatures2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
