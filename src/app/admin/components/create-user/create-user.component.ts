import { Component } from '@angular/core';
import { ICanDeactivate } from '../../../auth/route-gurd';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements ICanDeactivate {
  canExit(): boolean {
    if (this.address || this.name || this.email) {
      return confirm("You have unsaved changes ?")
    }
    return true;

  }
  name!: string;
  email!: string;
  address!: string;








}
