import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditorPageComponent } from './article-editor-page.component';

describe('ArticleEditorPageComponent', () => {
  let component: ArticleEditorPageComponent;
  let fixture: ComponentFixture<ArticleEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleEditorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
