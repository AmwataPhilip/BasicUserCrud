import { User } from '../../core/models/user.model';
import { Component, Input } from '@angular/core';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
})
export class UserCardComponent {
  @Input() user: User = new User();

  constructor(private userService: UsersService) {}

  handleDeleteUser() {
    this.userService.deleteUser(this.user.id);
  }
}
