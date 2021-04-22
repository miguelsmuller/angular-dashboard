import { Component, ViewChild, ElementRef } from '@angular/core';

import { UserButtonDropdownComponent } from '../user-button-dropdown/user-button-dropdown.component';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.scss']
})
export class UserButtonComponent {
  // Query first element with content #(local variable) in template | in this case # equal {userButtonReference}
  @ViewChild('userButtonReference', { static: false })
  public input: ElementRef;

  // Query first element of type UserButtonDropdownComponent in template | in this case {app-user-button-dropdown}
  @ViewChild(UserButtonDropdownComponent, { static: false })
  public dropdown: UserButtonDropdownComponent;

  constructor() { }

  public showDropdown() {
    this.dropdown.show();
  }
}
