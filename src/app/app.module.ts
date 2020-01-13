import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsViewComponent } from './news/news-view/news-view.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsDetailesComponent } from './news/news-detailes/news-detailes.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewsService } from './news/news.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewsViewComponent,
    NewsListComponent,
    NewsDetailesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [NewsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
