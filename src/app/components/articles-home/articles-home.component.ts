import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-home',
  templateUrl: './articles-home.component.html',
  styleUrls: ['./articles-home.component.css'],
})
export class ArticlesHomeComponent implements OnInit {
  isOpen = false;
  articles: any[] = [];

  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.articlesService.getArticles().subscribe((articles) => {
      this.articles = articles;
      console.log(this.articles);
    });
  }

}
