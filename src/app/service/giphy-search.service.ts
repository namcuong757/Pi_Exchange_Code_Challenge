import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GiphyService } from './giphy.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphySearchService {
  constructor(private httpClient: HttpClient, private giphyService: GiphyService) {}

    search_giphy() : Observable<any>
    {
      return this.httpClient.get(`https://api.giphy.com/v1/gifs/trending?api_key=%${this.giphyService.api_key}&limit=50`);
    }
}
