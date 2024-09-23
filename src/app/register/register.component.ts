import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username: string = '';

  constructor(private userService: UserService) {}

  onSubmit(): void {
    const userData = { username: this.username };
    this.userService.registerUser(userData).subscribe(response => {
      console.log('User registered:', response);
    });
  }
}
