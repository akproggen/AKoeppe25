import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-newslist',
  imports: [CommonModule],
  templateUrl: './newslist.component.html',
  styleUrl: './newslist.component.scss'
})
export class NewslistComponent implements OnInit {
  articles: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.newsService.getHeadlines().subscribe({
      next: (response) => {
        this.articles = response.articles;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load news. Please try again later.';
        this.loading = false;
        console.error(err);
      }
    });
  }
}