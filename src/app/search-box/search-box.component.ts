import { Component, ElementRef, OnInit } from '@angular/core';
import { SearchBoxService } from '../Services/Searchbox.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  public searchText: string = '';
  searchResults: any[] = [];
  totalHits: number = 0;
  suggestion: string = '';
  searchPerformed: boolean = false;
  selectedResult: any = null;

  constructor(private _searchBoxService: SearchBoxService,
    private router: Router,
    private elRef: ElementRef
  ) { }

  // Array of colors
  colors: string[] = ["#ff5733", "#33ff57", "#3357ff", "#f4c2c2", "#ffcc00", "#6a0dad"];

  // Change background color method
  changeBackgroundColor(): void {
    const container = this.elRef.nativeElement.querySelector('.center-container');
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    if (container) {
      container.style.backgroundColor = randomColor;
    }
  }

  ngOnInit(): void {
    this.changeBackgroundColor(); // Initial color change
    setInterval(() => this.changeBackgroundColor(), 30000); // Change every 30 seconds
  }

  performSearch(event: Event): void {
    event.preventDefault();
    if (this.searchText.trim()) {
      this._searchBoxService.searchArticles(this.searchText).subscribe(
        (response: any) => {
          this.totalHits = response.totalHits;
          this.suggestion = response.suggestion;
          this.searchResults = response.results;  // Update to use 'results' from the response
          this.searchPerformed = true;  // Set searchPerformed to true after search
          this.selectedResult = this.searchResults[0];  // Set the first result as the selected result
          console.log(this.searchResults);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    } else {
      console.log('Please enter a search term.');
    }
  }

  showPreview(result: any): void {
    this.selectedResult = result;  // Set the selected result
  }

  clearSearch(): void {
    this.searchText = '';  // Clear the search text only
  }

  closeAllPopups(): void {
    this.searchResults = [];  // Clear all search results
    this.searchPerformed = false;  // Reset searchPerformed when closing results
    this.selectedResult = null;  // Clear the selected result
  }
}

