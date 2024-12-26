import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  @Input() result: any;

  openLink(url: string): void {
    window.location.href = url;  // Open the link in the same tab
  }
}
