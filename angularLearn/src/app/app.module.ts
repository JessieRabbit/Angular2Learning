import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HighlightDirective } from './highlight.directive';
import { TruncatePipe } from './truncate.pipe';

import { BookService } from './book/book.service';
import { HomeComponent } from './home/home.component';
import { WatchComponent } from './watch/watch.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HighlightDirective,
    TruncatePipe,
    HomeComponent,
    WatchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
