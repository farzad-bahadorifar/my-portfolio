import {
  annotate,
  annotationGroup as createAnnotationGroup,
} from 'rough-notation';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('highlight1', { static: true }) highlight1!: ElementRef;
  @ViewChild('highlight2', { static: true }) highlight2!: ElementRef;
  @ViewChild('highlight3', { static: true }) highlight3!: ElementRef;
  @ViewChild('circle1', { static: true }) circle1!: ElementRef;
  title = 'portfolio';

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      'whitesmoke';

    const highlightAnnotation1 = annotate(this.highlight1.nativeElement, {
      type: 'highlight',
      color: '#FFD700',
      strokeWidth: 2,
      animationDuration: 800,
    });

    const highlightAnnotation2 = annotate(this.highlight2.nativeElement, {
      type: 'highlight',
      color: '#f9e8bb',
      strokeWidth: 2,
      animationDuration: 800,
    });

    const highlightAnnotation3 = annotate(this.highlight3.nativeElement, {
      type: 'highlight',
      color: '#fcd4b5',
      strokeWidth: 2,
      animationDuration: 800,
    });


    const circleAnnotation = annotate(this.circle1.nativeElement, {
      type: 'circle',
      color: '#FFD700',
      strokeWidth: 2,
      animationDuration: 800,
    });

    // Group the annotations using the renamed function
    const annotationsGroup = createAnnotationGroup([
      highlightAnnotation1,
      highlightAnnotation2,
      highlightAnnotation3,
      circleAnnotation,
    ]);

    // Show all annotations in order
    annotationsGroup.show();
  }
}
