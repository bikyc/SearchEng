import { Component, OnInit } from '@angular/core';
import { SearchBoxService } from '../Services/Searchbox.service';

@Component({
  selector: 'app-list-results',
  templateUrl: './list-result-page.component.html',
  styleUrls: ['./list-result-page.component.css']
})
export class ListResultPageComponent implements OnInit {
  searchResults: any[] = [];

  constructor(private _searchBoxService: SearchBoxService) {}

  ngOnInit(): void {
    // this._searchBoxService.getResults().subscribe((results) => {
    //   this.searchResults = results;
    // });
  }
}
