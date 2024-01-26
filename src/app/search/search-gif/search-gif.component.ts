import { Component } from '@angular/core';
import { GiphySearchService } from '../../service/giphy-search.service';
@Component({
  selector: 'app-search-gif',
  templateUrl: './search-gif.component.html',
  styleUrl: './search-gif.component.css'
})
export class SearchGifComponent {
  constructor(private giphySearchService : GiphySearchService){}
  gifs : any[] = [];
  search_gifs(query : string)
  {
    // if query is not empty then call the search_gifs which refer to search endpoint
    if(query != '')
    {
      this.giphySearchService.search_gifs(query);
    }
  }
}
