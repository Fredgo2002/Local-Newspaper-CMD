import { TestBed } from '@angular/core/testing';

import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesService);
  });

  it('should return articles', () => {
    const articles = service.getArticles();
    expect(articles.length).toBeGreaterThan(0);
  });

  it('should add an article', () => {
    const article = {
      id: 1,
      headline: 'Test Article',
      body: 'This is a body for the test article',
      author: 'Test Author',
      publication_date: '2026-02-23',
      published: true,
    };
    service.addArticle(article);
    const articles = service.getArticles();
    expect(articles.some((a) => a.headline === 'Test Article')).toBeTrue();
  });

  it('should update an article', () => {
    const article = {
      id: 1,
      headline: 'Test Article',
      body: 'This is a body for the test article',
      author: 'Test Author',
      publication_date: '2026-02-23',
      published: true,
    };
    service.addArticle(article);
    const articleUpdated = {
      id: 1,
      headline: 'Test Article Updated',
      body: 'This is a body for the test article',
      author: 'Test Author',
      publication_date: '2026-02-23',
      published: true,
    };
    service.updateArticle(articleUpdated);
    const articles = service.getArticles();
    expect(articles.some((a) => a.headline === 'Test Article Updated')).toBeTrue();
  });

  it('should delete an article', () => {
    const article = {
      id: 1,
      headline: 'Test Article',
      body: 'This is a body for the test article',
      author: 'Test Author',
      publication_date: '2026-02-23',
      published: true,
    };
    service.addArticle(article);
    service.deleteArticle(article);
    const articles = service.getArticles();
    expect(articles.some((a) => a.headline === 'Test Article')).toBeFalse();
  });
});
