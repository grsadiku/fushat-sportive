import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../users/services/user.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  standalone: true,
  imports: [FormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CreateComponent {
  protected router = inject(Router);

  saveFacility(): void {}
}
