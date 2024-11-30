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
  dragIndex: number | null = null;  // Track the index of the dragged popup
  dragOffsetX: number = 0;
  dragOffsetY: number = 0;
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
          this.searchResults = response.query.search;
          // this._searchBoxService.setResults(this.searchResults); // Store results in the service
          console.log(this.searchResults)
          //this.router.navigate(['/results']); // Navigate to results component
        },
        (error) => {
          console.error('Error fetching Wikipedia data:', error);
        }
      );
    } else {
      console.log('Please enter a search term.');
    }
  }

  getPopupStyle(index: number) {
    if (this.dragIndex === index) {
      return {
        top: `${this.dragOffsetY}px`,
        left: `${this.dragOffsetX}px`
      };
    }
    return {};
  }

  onMouseDown(event: MouseEvent, index: number): void {
    this.dragIndex = index;
    // Calculate the offset where the mouse clicked inside the popup
    const popupElement = event.target as HTMLElement;
    this.dragOffsetX = event.clientX - popupElement.getBoundingClientRect().left;
    this.dragOffsetY = event.clientY - popupElement.getBoundingClientRect().top;

    // Add event listeners to track the mouse drag
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove = (event: MouseEvent): void => {
    if (this.dragIndex !== null) {
      this.dragOffsetX = event.clientX - this.dragOffsetX;
      this.dragOffsetY = event.clientY - this.dragOffsetY;
    }
  };

  onMouseUp = (): void => {
    this.dragIndex = null;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };

  closePopup(index: number): void {
    this.searchResults.splice(index, 1);  // Remove the selected result
  }
}

