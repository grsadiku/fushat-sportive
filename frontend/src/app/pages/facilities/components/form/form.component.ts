import { Component, inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../users/services/user.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    RouterLink,
    TablerIconsModule,
  ],
})
export class FormComponent implements OnInit {
  facilityForm: FormGroup;

  protected formBuilder = inject(FormBuilder);
  protected userService = inject(UserService);
  protected router = inject(Router);

  ngOnInit(): void {
    this.facilityForm = this.formBuilder.group({
      title: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      profileImageUrl: [''],
      isActive: [null, [Validators.required, Validators.email]],
      entryDate: [new Date(), Validators.required],
      sportId: [null, Validators.required],
      idManagingUser: [null, Validators.required],
      idState: [null, Validators.required],
      idCity: [null, Validators.required],
      idEntryUser: [null, Validators.required],
    });
  }

  saveUser(): void {
    // if (this.userForm.valid) {
    //   // Call the service method to post the form data
    //   this.userService.createUser(this.userForm.value).subscribe(
    //     (response) => {
    //       console.log('User created successfully:', response);
    //       // Optionally, you can reset the form after successful submission
    //       this.userForm.reset();
    //       this.router.navigate(['/users']);
    //     },
    //     (error) => {
    //       console.error('Error creating user:', error);
    //     }
    //   );
    // } else {
    //   console.log('unvalid');
    //   // Mark all form controls as touched to display validation errors
    //   this.userForm.markAllAsTouched();
    // }
  }
}
