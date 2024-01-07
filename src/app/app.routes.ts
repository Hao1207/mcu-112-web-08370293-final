import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ArticleEditorPageComponent } from './article-editor-page/article-editor-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'editor', component: ArticleEditorPageComponent },
  { path: 'signin', component: SignInPageComponent },
  { path: 'signup', component: SignUpPageComponent },
];
