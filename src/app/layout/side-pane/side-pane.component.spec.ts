import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { SidePaneComponent } from './side-pane.component'; describe('SidePaneComponent', () => {
  let component: SidePaneComponent;
  let fixture: ComponentFixture<SidePaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidePaneComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        OverlayModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SidePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
