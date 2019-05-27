import { SharedModule } from './Shared/Shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HighlightDirective } from './highlight.directive';
import { TruncatePipe } from './truncate.pipe';

import { BookService } from './book/book.service';
import { HomeComponent } from './home/home.component';
import { WatchComponent } from './watch/watch.component';
import { BackComponent } from './watch/back/back.component';
import { ConnectComponent } from './watch/connect/connect.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './stores/counter/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { UdemyTestComponent } from './udemy-test/udemy-test.component';
import { HeroFormsComponent } from './hero-forms/hero-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HighlightDirective,
    TruncatePipe,
    HomeComponent,
    WatchComponent,
    BackComponent,
    ConnectComponent,
    UdemyTestComponent,
    HeroFormsComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(counterReducer),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
