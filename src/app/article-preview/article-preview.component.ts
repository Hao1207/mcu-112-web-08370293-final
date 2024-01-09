import { Component, OnInit } from '@angular/core';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { ArticleService } from '../service/article.service';
import { Article } from '../model/article';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [FavoriteButtonComponent, NgFor, NgIf],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css',
})
export class ArticlePreviewComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    // 訂閱 ArticleService 服務的 getArticles 方法的回傳值
    this.articleService
      .getArticles()
      .subscribe((articles) => (this.articles = articles));
  }
}
