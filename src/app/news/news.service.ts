import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NewsService {

    constructor(private httpClient: HttpClient) { }

    getNews(): Observable<any> {
        return this.httpClient.get("https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=090bd1f8656f4b30bb918f270051341a")
            .pipe((response: any) => response);
    }

}