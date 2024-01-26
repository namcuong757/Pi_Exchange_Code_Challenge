import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GiphyService } from './giphy.service';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphySearchService {
  constructor(private httpClient: HttpClient, private giphyService: GiphyService) {}
  // init gifs with empty array
  gifs = new BehaviorSubject<any>([]);  
  // function to call APIs of giphy to get trending gifs
  get_trending_giphy() {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${this.giphyService.api_key}&limit=100`
    return this.httpClient.get(url).subscribe((response:any) =>{
      // push into gifs
      this.gifs.next(response.data);
    });
  }
  // function to call APIs of giphy to get searched gifs pass in the query want to search
  search_gifs(query:string)
  {
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${this.giphyService.api_key}&limit=100`;
    return this.httpClient.get(url).subscribe((response:any) =>{
      // push it to gifs
      this.gifs.next(response.data);
    });
  }
  // function to get gifs whenever it modify or update
  get_gifs()
  {
    return this.gifs.asObservable();
  }
  // function to call APIs for a specific gif with ID
  get_gif_details(gifId: string): Observable<any> {
    const url = `https://api.giphy.com/v1/gifs/${gifId}?api_key=${this.giphyService.api_key}`;
    return this.httpClient.get(url);
  }
  
}
