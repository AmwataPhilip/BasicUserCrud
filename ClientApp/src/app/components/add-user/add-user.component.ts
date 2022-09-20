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
    FirstName: ['', [Validators.required, Validators.maxLength(100)]],
    LastName: ['', [(Validators.required, Validators.maxLength(100))]],
    Email: [
      '',
      [Validators.required, Validators.maxLength(100), Validators.email],
    ],
    Password: ['', [Validators.required, Validators.maxLength(50)]],
    Mobile: this.formBuilder.group({
      CountryCode: ['', Validators.maxLength(3)],
      Number: ['', Validators.maxLength(20)],
    }),
    Role: ['', Validators.maxLength(150)],
    Client: ['', Validators.maxLength(150)],
    IsActive: ['Please select...', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {}

  handleUserFormSubmission() {
    const user = {
      ...this.userFormGroup.value,
      Id: 0,
      CreatedAt: Date.now(),
      UpdatedAt: Date.now(),
    } as User;
    this.userFormGroup.valid && this.usersService.addUser(user);
  }
}
