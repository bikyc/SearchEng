import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-result-page',
  templateUrl: './list-result-page.component.html',
  styleUrls: ['./list-result-page.component.css']
})
export class ListResultPageComponent {
  @Input() results!: any[];
  @Input() suggestion!: string;
  @Output() preview = new EventEmitter<any>();

  currentPage: number = 1;

  openInNewTab(url: string): void {
    window.open(url, '_blank'); // Open the link in a new tab
  }
}
