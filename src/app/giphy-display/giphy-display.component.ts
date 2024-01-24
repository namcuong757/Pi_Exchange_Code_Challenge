import { Component, OnInit } from '@angular/core';
import { GiphySearchService } from '../service/giphy-search.service';
import { Observable } from 'rxjs';
import { GiphyService } from '../service/giphy.service';

@Component({
  selector: 'app-giphy-display',
  templateUrl: './giphy-display.component.html',
  styleUrls: ['./giphy-display.component.css']
})
export class GiphyDisplayComponent implements OnInit {
  gifs$!: Observable<any[]>;

  constructor(private giphySearchService: GiphySearchService, private giphyService : GiphyService) {}

  ngOnInit(): void {
    this.giphyService.api_key = 'Lx92S7VHv52GjvhBBS4yHzgrz2IZlHCx';
    this.gifs$ = this.giphySearchService.search_giphy() as Observable<any[]>;
    console.log(this.gifs$);
  }
}
