import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../user/user.reducer';

export const selectUserState = createFeatureSelector<UserState>('userState');

export const selectUser = createSelector(
  selectUserState,
  (state: UserState, props: { id: number }) =>
    state.users.find((user) => user.id === props.id)
);
