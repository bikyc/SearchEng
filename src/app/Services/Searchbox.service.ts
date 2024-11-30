import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBoxService {
  private baseUrl: string = 'https://en.wikipedia.org/w/api.php';
  private searchResults = new BehaviorSubject<any[]>([]); // BehaviorSubject for sharing data

  constructor(private http: HttpClient) {}

  searchArticles(query: string): Observable<any> {
    const apiUrl = `${this.baseUrl}?action=query&list=search&format=json&srsearch=${encodeURIComponent(query)}&origin=*`;
    return this.http.get(apiUrl);
  }

  setResults(results: any[]): void {
    // this.searchResults.next(results); // Update results
  }

//   getResults(): Observable<any[]> {
//     // return this.searchResults.asObservable(); // Observable for other components
//   }
}
