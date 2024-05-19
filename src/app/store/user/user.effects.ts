import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import * as UserActions from './user.actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap((action) =>
        this.userService.getUsers(action.page).pipe(
          map((response) => UserActions.loadUsersSuccess({ response })),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      mergeMap((action) =>
        this.http.get<any>(`https://reqres.in/api/users/${action.id}`).pipe(
          map((user) => UserActions.loadUserSuccess({ user: user.data })),
          catchError((error) => of(UserActions.loadUserFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private http: HttpClient
  ) {}
}
