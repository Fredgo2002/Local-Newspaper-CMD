import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Article, ARTICLES_CATEGORIES, ARTICLES_MODES } from 'src/app/constants/articles.constants';

@Component({
  selector: 'app-articles-home',
  templateUrl: './articles-home.component.html',
  styleUrls: ['./articles-home.component.css'],
})
export class ArticlesHomeComponent implements OnInit {
  openMenuIndex: number | null = null;
  isOpenSidePane = false;
  selectedArticle: any = null;
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  articlesCategories = ARTICLES_CATEGORIES;
  selectedCategory = ARTICLES_CATEGORIES.all;
  mode: 'view' | 'edit' | 'add' = 'view';
  articleForm!: FormGroup;

  constructor(
    private articlesService: ArticlesService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.articles = this.articlesService.getArticles();
    this.articleForm = this.formBuilder.group({
      headline: ['', Validators.required],
      body: ['', Validators.required],
      author: ['', Validators.required],
      publication_date: ['', Validators.required],
      published: [false, Validators.required]
    });
  }

  toggleMenu(index: number) {
    this.openMenuIndex = this.openMenuIndex === index ? null : index;
  }

  openSidePaneEdit(article: any) {
    this.selectedArticle = article;
    this.isOpenSidePane = true;
    this.openMenuIndex = null;
    this.mode = 'edit';
    this.articleForm.patchValue({
      headline: article.headline,
      body: article.body,
      author: article.author,
      publication_date: article.publication_date.split('/').reverse().join('-'),
      published: article.published
    });
  }

  openSidePaneAdd() {
    this.selectedArticle = null;
    this.isOpenSidePane = true;
    this.openMenuIndex = null;
    this.mode = 'add';
    this.articleForm.reset({
      published: true
    });
  }

  openSidePaneView(article: any) {
    this.selectedArticle = article;
    this.isOpenSidePane = true;
    this.openMenuIndex = null;
    this.mode = 'view';
  }

  closeSidePane() {
    this.isOpenSidePane = false;
    this.selectedArticle = null;
  }

  saveArticle() {
    if (this.mode === 'edit') {
      const article: Article = {
        id: this.selectedArticle.id,
        headline: this.articleForm.value.headline,
        body: this.articleForm.value.body,
        author: this.articleForm.value.author,
        publication_date: this.articleForm.value.publication_date,
        published: this.articleForm.value.published
      }
      this.articlesService.updateArticle(article);
      this.closeSidePane();
      this.articleForm.reset();
      this.articles = [...this.articlesService.getArticles()];
    } else if (this.mode === 'add') {
      const article: Article = {
        id: this.articles.length + 1,
        headline: this.articleForm.value.headline,
        body: this.articleForm.value.body,
        author: this.articleForm.value.author,
        publication_date: this.articleForm.value.publication_date,
        published: this.articleForm.value.published
      }
      this.articlesService.addArticle(article);
      this.closeSidePane();
      this.articleForm.reset();
      this.articles = [...this.articlesService.getArticles()];
    }
  }

  deleteArticle(article: Article) {
    this.articlesService.deleteArticle(article);
    this.articles = [...this.articlesService.getArticles()];
  }

  publishArticle(article: Article) {
    this.closeSidePane();
    this.articlesService.updateArticle(article);
    this.articles = [...this.articlesService.getArticles()];
  }

  filterArticles(category: string) {
    if (category === this.articlesCategories.all) {
      this.articles = [...this.articlesService.getArticles()];
    } else if (category === this.articlesCategories.published) {
      this.articles = this.articlesService.getArticles().filter(article => article.published === true);
    } else if (category === this.articlesCategories.unpublished) {
      this.articles = this.articlesService.getArticles().filter(article => article.published === false);
    }
  }

  search() {
    //non funcional because of lack of task description
  }
}
