import { annotate } from 'rough-notation';
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
  @ViewChild('underline', { static: true }) underline!: ElementRef;
  title = 'portfolio';

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      'whitesmoke'; // Replace with your custom color value

    // Create a rough notation instance using the annotate function
    const roughAnnotation = annotate(this.underline.nativeElement, {
      type: 'underline',
      animationDuration: 2000,
      color: '#FFD700', // Choose your highlight color
      padding: [5, 5, 5, 5], // Optional: padding around the highlight
      strokeWidth: 2, // Optional: adjust stroke width
    });

    roughAnnotation.show();
  }
}
