import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserButtonDropdownComponent } from './user-button-dropdown.component';

describe('UserButtonDropdownComponent', () => {
  let component: UserButtonDropdownComponent;
  let fixture: ComponentFixture<UserButtonDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserButtonDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserButtonDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
