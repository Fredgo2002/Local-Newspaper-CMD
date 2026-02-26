import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Article } from 'src/app/constants/articles.constants';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ErrorComponent } from 'src/app/dialog/error/error.component';
import { MatDialog } from '@angular/material/dialog';

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
  @ViewChild('fileInput') fileInput!: ElementRef;

  public selectedFiles: File[] = [];
  public errorMessage = ''
  public images: any[] = [];

  constructor(
    public dialog: MatDialog
  ) { }

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



  uploadImage(event: any): void {
    this.selectedFiles = Array.from(event.target.files);
    this.selectedFiles.forEach(file => {
      const file_name = file.name;
      console.log("file", file)
      console.log("type", file.type);
      if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        this.errorMessage = 'Unsupported file type.';
        this.selectedFiles = [];
        this.resetFileInput();
        this.dialog.open(ErrorComponent, {
          height: '400px',
          width: '600px',
        });
        return;
      } else {
      }
      console.log("selected", this.selectedArticle)
    });

  }

  resetFileInput(): void {
    this.fileInput.nativeElement.value = '';
  }

  removeFile(index: any): void {
    console.log(index)
  }
}
