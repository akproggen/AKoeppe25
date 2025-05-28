import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: {
    source: { id: string; name: string };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = '8440fac4a9064da2a189a0795feb5c30'; // Replace with your NewsAPI key
  private apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getHeadlines(): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(this.apiUrl);
  }
}