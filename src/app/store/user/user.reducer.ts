import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User, UserResponse } from '../../models/user.model';

export interface UserState {
  users: User[];
  user: User | null;
  error: string | null;
  total: number;
  page: number;
}

export const initialState: UserState = {
  users: [],
  user: null,
  error: null,
  total: 0,
  page: 1,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { response }) => ({
    ...state,
    users: response.data,
    total: response.total,
    page: response.page,
    error: null,
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(UserActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),
  on(UserActions.loadUserFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
