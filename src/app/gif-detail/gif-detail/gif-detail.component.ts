import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GiphySearchService } from '../../service/giphy-search.service';
import { response } from 'express';

@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif-detail.component.html',
  styleUrl: './gif-detail.component.css'
})
export class GifDetailComponent implements OnInit{
  constructor(private router : Router, private route : ActivatedRoute, private giphySeachService : GiphySearchService){}
  gif:any;
  ngOnInit():void
  {
    // get the gif if of onclick image
    const gif_id = this.route.snapshot.paramMap.get('id');
    if(gif_id)
    {
      this.giphySeachService.get_gif_details(gif_id).subscribe((response:any)=>
      {
        this.gif = response.data;
      })
    }
  
  }
  expandGif(gif: any): void {
    // Navigate to the detail view passing the GIF ID as a route parameter
    this.router.navigate(['/gif-detail', gif.id]);
  }
  
}
