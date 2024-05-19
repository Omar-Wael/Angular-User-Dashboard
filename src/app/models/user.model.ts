// export interface User {
//   id: number;
//   first_name: string;
//   last_name: string;
//   avatar: string;
//   email: string;
// }

// export interface UserResponse {
//   data: User[];
//   total: number;
//   total_pages: number;
//   page: number;
//   per_page: number;
// }
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface UserResponse {
  data: User[];
  total: number;
  total_pages: number;
  page: number;
  per_page: number;
}
export interface UserState {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  error: string;
}

export interface AppState {
  userState: UserState;
}
