import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserModule } from './store/user.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducer } from './store/user/user.reducer';
import { UserEffects } from './store/user/user.effects';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserDetailsComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    StoreModule.forRoot({ userState: userReducer }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
    AppRoutingModule,
    MatPaginatorModule,
    MatProgressBarModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
