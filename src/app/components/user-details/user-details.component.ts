import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { loadUser } from '../../store/user/user.actions';
import { selectUser } from '../../store/user/user.selectors';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  // user$!: Observable<any>;
  user$!: Observable<any>;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    if (userId) {
      this.store.dispatch(loadUser({ id: userId }));
      this.user$ = this.store.select(selectUser, { id: userId });
    }
  }

  ngOnInit(): void {}

  backToList(): void {
    this.router.navigate(['/']);
  }
}
