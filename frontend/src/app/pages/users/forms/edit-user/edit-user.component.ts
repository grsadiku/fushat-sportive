import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      IDCity: ['', Validators.required],
      Birthdate: [''],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
      IDRole: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
    });
  }

  editUser(): void {
    if (this.userForm.valid) {
      // Call the service method to post the form data
      this.userService.createUser(this.userForm.value).subscribe(
        (response) => {
          console.log('User created successfully:', response);
          // Optionally, you can reset the form after successful submission
          this.userForm.reset();
          this.router.navigate(['/users']);
        },
        (error) => {
          console.error('Error creating user:', error);
        }
      );
    } else {
      console.log('unvalid');
      // Mark all form controls as touched to display validation errors
      this.userForm.markAllAsTouched();
    }
  }
}
