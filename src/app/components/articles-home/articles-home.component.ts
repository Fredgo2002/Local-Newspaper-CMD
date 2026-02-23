import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-home',
  templateUrl: './articles-home.component.html',
  styleUrls: ['./articles-home.component.css'],
})
export class ArticlesHomeComponent implements OnInit {
  openMenuIndex: number | null = null;
  isOpenSidePane = false;
  selectedArticle: any = null;
  articles: any[] = [];
  articlesCategories = {
    published: 'published',
    unpublished: 'unpublished',
    all: 'all'
  }
  mode: 'view' | 'edit' | 'add' = 'view';
  articleForm!: FormGroup;

  constructor(
    private articlesService: ArticlesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.articlesService.getArticles().subscribe((articles) => {
      this.articles = articles;
      console.log(this.articles);
    });
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
  }

  openSidePaneAdd() {
    this.selectedArticle = null;
    this.isOpenSidePane = true;
    this.openMenuIndex = null;
    this.mode = 'add';
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
      // this.articlesService.updateArticle(this.selectedArticle.id, this.articleForm.value).subscribe(() => {
      //   this.closeSidePane();
      // });
    } else if (this.mode === 'add') {
      // this.articlesService.createArticle(this.articleForm.value).subscribe(() => {
      //   this.closeSidePane();
      // });
    }
  }

}
