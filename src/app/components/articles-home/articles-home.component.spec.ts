import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SidePaneComponent } from 'src/app/layout/side-pane/side-pane.component';
import { ArticlesHomeComponent } from './articles-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ArticlesHomeComponent', () => {
  let component: ArticlesHomeComponent;
  let fixture: ComponentFixture<ArticlesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesHomeComponent, SidePaneComponent],
      imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatOptionModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatPaginatorModule,
        OverlayModule,
        MatSidenavModule,
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ArticlesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
