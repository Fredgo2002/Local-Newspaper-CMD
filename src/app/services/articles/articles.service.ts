import { Injectable } from '@angular/core';
import { ARTICLES, Article } from 'src/app/constants/articles.constants';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articles: Article[] = [...ARTICLES]

  getArticles() {
    return this.articles;
  }

  addArticle(article: Article) {
    this.articles.push(article);
  }

  updateArticle(article: Article) {
    const index = this.articles.findIndex((a) => a.id === article.id);
    if (index !== -1) {
      this.articles[index] = article;
    }
  }

  deleteArticle(article: Article) {
    this.articles = this.articles.filter((a) => a.id !== article.id);
  }
}
