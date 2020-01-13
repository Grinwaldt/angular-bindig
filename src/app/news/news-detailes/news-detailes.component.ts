import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-detailes',
  templateUrl: './news-detailes.component.html',
  styleUrls: ['./news-detailes.component.scss']
})
export class NewsDetailesComponent implements OnInit {
  @Input() new: any;

  constructor() {
    console.log("new",this.new);
   }

  ngOnInit() {
    console.log("init details")
  }
  removeImg() {
    this.new.urlToImage = "";
  }
}
