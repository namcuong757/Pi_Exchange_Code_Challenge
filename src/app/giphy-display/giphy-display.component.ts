import { Component, OnDestroy, OnInit } from '@angular/core';
import { GiphySearchService } from '../service/giphy-search.service';
import { Observable, Subscription } from 'rxjs';
import { GiphyService } from '../service/giphy.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-giphy-display',
  templateUrl: './giphy-display.component.html',
  styleUrls: ['./giphy-display.component.css']
})
export class GiphyDisplayComponent implements OnInit, OnDestroy {
  gifs: any[] = []; // Initialize as undefined
  subscription : Subscription | undefined;
  
  constructor(private giphySearchService: GiphySearchService, private giphyService: GiphyService, private router: Router) {}

  ngOnInit(): void {
    // call get_trending_giphy from trending endpoints
    this.giphySearchService.get_trending_giphy();
    
    this.subscription = this.giphySearchService.get_gifs().subscribe(
      (response:any)=>
    {
      this.gifs = response;
    }
    );
  }
  expandGif(gif: any): void {
    // Navigate to the detail view passing the GIF ID as a route parameter
    this.router.navigate(['/gif-detail', gif.id]);
  }
  
  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }
}
