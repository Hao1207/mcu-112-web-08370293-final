import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../model/article'; // 假設您有定義一個 Article 類別

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  // 定義 json-server 伺服器的網址
  apiUrl = 'http://localhost:3000/articles';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    // 使用 HttpClient 服務的 get 方法，傳入 apiUrl，回傳一個 Observable 物件
    return this.http.get<Article[]>(this.apiUrl);
  }

  addArticle(article: Article): Observable<Article> {
    // 使用 HttpClient 服務的 post 方法，傳入 apiUrl 和 article 物件，回傳一個 Observable 物件
    return this.http.post<Article>(this.apiUrl, article);
  }

  deleteArticle(id: number): Observable<Article> {
    // 使用 HttpClient 服務的 delete 方法，傳入 apiUrl 和 id，回傳一個 Observable 物件
    return this.http.delete<Article>(`${this.apiUrl}/${id}`);
  }

  updateArticle(article: Article): Observable<Article> {
    // 使用 HttpClient 服務的 put 方法，傳入 apiUrl 和 article 物件，回傳一個 Observable 物件
    return this.http.put<Article>(`${this.apiUrl}/${article.id}`, article);
  }
}
