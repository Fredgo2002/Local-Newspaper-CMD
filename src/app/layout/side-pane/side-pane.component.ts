import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Article } from 'src/app/constants/articles.constants';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';

@Component({
  selector: 'app-side-pane',
  templateUrl: './side-pane.component.html',
  styleUrls: ['./side-pane.component.css']
})
export class SidePaneComponent {
  @Input() isOpen = false;
  @Input() mode: 'view' | 'edit' | 'add' = 'view';
  @Input() selectedArticle: Article | null = null;
  @Input() articleForm!: FormGroup;
  @Input() sidePaneOrigin!: CdkOverlayOrigin;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();
  @Output() publish = new EventEmitter<Article>();

  onClose() {
    this.close.emit();
  }

  onSave() {
    this.save.emit();
  }

  onPublish() {
    if (this.selectedArticle) {
      this.publish.emit(this.selectedArticle);
    }
  }
}
