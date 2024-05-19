import { createAction, props } from '@ngrx/store';
import { User, UserResponse } from '../../models/user.model';

export const loadUsers = createAction(
  '[User List] Load Users',
  props<{ page: number }>()
);
export const loadUsersSuccess = createAction(
  '[User List] Load Users Success',
  props<{ response: UserResponse }>()
);
export const loadUsersFailure = createAction(
  '[User List] Load Users Failure',
  props<{ error: any }>()
);

export const loadUser = createAction(
  '[User] Load User',
  props<{ id: number }>()
);

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: User }>()
);

export const loadUserFailure = createAction(
  '[User] Load User Failure',
  props<{ error: any }>()
);
