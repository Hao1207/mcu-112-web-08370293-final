import { Component } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Article } from '../model/article';

export class AppModule {}
@Component({
  selector: 'app-article-editor-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article-editor-page.component.html',
  styleUrl: './article-editor-page.component.css',
})
export class ArticleEditorPageComponent {
  articleForm: FormGroup;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.articleForm = this.fb.group({
      title: [''],
      description: [''],
      body: [''],
      tags: [''],
    });
  }

  onPublishArticle() {
    // 收集表單資料
    const title = this.articleForm.value['title']; // 取得標題資料
    const description = this.articleForm.value['description']; // 取得描述資料
    const body = this.articleForm.value['body']; // 取得內容資料
    const tags = this.articleForm.value['tags']; // 取得標籤資料（假設您有收集標籤的方法）

    // 建立新的 Article 物件
    const newArticle = new Article(
      title, // 設定標題
      'Anah Benešová', // 設定作者（目前寫死，可以用變數取代）
      new Date(), // 設定日期
      body, // 設定內容
      tags // 設定標籤
    );

    // 呼叫服務的 addArticle 方法新增文章
    this.articleService.addArticle(newArticle).subscribe({
      next: (addedArticle) => {
        // 新增文章成功的回呼函數
        // 處理成功新增文章的情況
        console.log('Article added successfully:', addedArticle); // 在控制台顯示新增的文章
        this.router.navigate(['/home']); // 導航到文章列表頁面
      },
      error: (error) => {
        // 新增文章失敗的回呼函數
        // 處理錯誤
        console.error('Error adding article:', error); // 在控制台顯示錯誤訊息
      },
    });
  }
}
