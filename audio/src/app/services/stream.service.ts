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

interface Categories {
  id: string;
  name: string;
}


@Injectable()
export class StreamService {
  
  public list: Tracks[] = [];
  public listCat: Categories[] = [];

  constructor(private http?: HttpClient) { }

  public setTracks(tracks: Array<Tracks>) {
	  this.list = tracks;
  }

  public setCategories(categories: Array<Categories>) {
	  this.listCat = categories;
  }

  public getTracks(page, cat): Observable<Tracks[]> {
    
    return this.http.get<Tracks[]>(`https://api-v2.hearthis.at/categories/${cat}/?count=6&page=${page}`);
  }

  public getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`https://api-v2.hearthis.at/categories/`);
  }

}





