import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {
  news: any;
  newIndex:number;
  constructor(private apiService: NewsService) { }

  ngOnInit() {
    this.apiService.getNews().subscribe(
      (resp: any) => {
        this.news = resp.articles;
      })
  }
  
  chooseNew(index: any) {
    console.log("index event",index)
    this.newIndex = index;
  }

}
