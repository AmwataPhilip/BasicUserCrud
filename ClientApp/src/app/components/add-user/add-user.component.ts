import { Router } from '@angular/router';
import { CLIENTS, USER_ROLES, USER_STATUSES } from './../../core/constants';
import { User } from '../../core/models/user.model';
import { UsersService } from '../../core/services/users.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  userRoles = USER_ROLES;
  userStatuses = USER_STATUSES;
  clients = CLIENTS;
  userFormGroup = this.formBuilder.nonNullable.group({
    firstName: ['', [Validators.required, Validators.maxLength(100)]],
    lastName: ['', [Validators.required, Validators.maxLength(100)]],
    email: [
      '',
      [Validators.required, Validators.maxLength(100), Validators.email],
    ],
    password: ['', [Validators.required, Validators.maxLength(50)]],
    countryCode: [
      '',
      [Validators.maxLength(3), Validators.pattern('^[0-9]*$')],
    ],
    number: ['', [Validators.maxLength(20), Validators.pattern('^[0-9]*$')]],
    role: ['', [Validators.required, Validators.maxLength(150)]],
    client: ['', [Validators.required, Validators.maxLength(150)]],
    isActive: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {}

  handleUserFormSubmission() {
    if (this.userFormGroup.invalid) {
      this.userFormGroup.markAllAsTouched();
      return;
    }
    const user = {
      ...this.userFormGroup.value,
      id: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    } as User;
    this.userFormGroup.valid && this.usersService.addUser(user);
  }

  handleNavigateToHome() {
    this.router.navigate(['/']);
  }
}
