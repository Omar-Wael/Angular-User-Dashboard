import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { loadUser } from '../../store/user/user.actions';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { UserService } from '../../services/user.service';

// Inside your component
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  inputControl: FormControl = new FormControl();
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private userSevice: UserService
  ) {}

  // search(event: Event): void {
  //   const target = event.target as HTMLInputElement;
  //   const userId = target.value;
  //   if (userId) {
  //     this.store.dispatch(loadUser({ id: userId }));
  //     this.router.navigate([`/user/${userId}`]);
  //   }
  // }

  ngOnInit() {
    this.inputControl.valueChanges
      .pipe(
        debounceTime(1000), // Wait for 1 second after user finishes typing
        distinctUntilChanged()
      )
      .subscribe(() => {
        // Call your function here
        this.search();
      });
  }
  onSearchInput(event: Event): void {
    this.inputControl.setValue((event.target as HTMLInputElement).value);
  }
  search(): void {
    const userId = this.inputControl.value;
    if (userId) {
      this.store.dispatch(loadUser({ id: userId }));
      this.router.navigate([`/user/${userId}`]);
    }
  }
}
