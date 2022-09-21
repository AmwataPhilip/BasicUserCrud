import { UsersService } from '../../core/services/users.service';
import { User } from '../../core/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: Promise<User[]> | null = null;

  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

  handleAddUser() {
    this.router.navigate(['/add-user']);
  }
}
