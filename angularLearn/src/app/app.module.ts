import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HighlightDirective } from './highlight.directive';
import { TruncatePipe } from './truncate.pipe';

import { BookService } from './book/book.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HighlightDirective,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
