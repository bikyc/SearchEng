import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBoxService {
  private baseUrl: string = 'https://localhost:5000/api/Search/search';  // Update to point to .NET API
  private searchResults = new BehaviorSubject<any[]>([]);  // BehaviorSubject for sharing data

  constructor(private http: HttpClient) {}

  // Method to search Wikipedia articles through .NET API
  searchArticles(query: string): Observable<any> {
    const apiUrl = `${this.baseUrl}?query=${encodeURIComponent(query)}`;
    return this.http.get<any>(apiUrl);  // Call .NET Web API's search endpoint
  }

  // This is used to set the results manually (if needed)
  setResults(results: any[]): void {
    this.searchResults.next(results);  // Update the results
  }

  // This can be used to get the current search results as an observable
  getResults(): Observable<any[]> {
    return this.searchResults.asObservable();  // Get observable for other components
  }
}
