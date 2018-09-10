import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface Tracks {
  id: number;
  duration: number;
  title: string;
  description: string;
  genre: string;
  artwork_url: string;
  artwork_url_retina: string;
  stream_url: string;
}


@Injectable()
export class StreamService {
  public list: Tracks[] = [];
  
  constructor(private http?: HttpClient) { 
   
  }

  public setTracks(tracks: Array<Tracks>) {
	  this.list = tracks;
  }

  public getTrackById(id) {
    console.log(this.list, 'stream');
    return this.list.find(item => item.id === id);
  }

  public getTracks(page): Observable<Tracks[]> {
    return this.http.get<Tracks[]>(`https://api-v2.hearthis.at/categories/chillout/?count=6&page=${page}`);

    // По уму надо тащить список категорий и делать на странице select
    //https://api-v2.hearthis.at/categories/ - json list categories
    //https://hearthis.at/api-v2/
    

  }

}





