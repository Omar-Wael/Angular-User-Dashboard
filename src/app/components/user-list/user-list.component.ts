import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { loadUsers } from '../../store/user/user.actions';
import { AppState } from '../../app.state'; // Import the AppState
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  total$: Observable<number>;
  page: number = 1;

  constructor(private store: Store<AppState>, private router: Router) {
    this.users$ = this.store.select((state) => state.userState.users);
    this.total$ = this.store.select((state) => state.userState.total);
  }

  ngOnInit() {
    this.loadUsers({ pageIndex: this.page - 1 });
  }

  loadUsers(event: any) {
    this.page = event.pageIndex + 1;
    this.store.dispatch(loadUsers({ page: this.page }));
  }

  viewUser(id: number) {
    this.router.navigate(['/user', id]);
  }
}
