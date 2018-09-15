import { Component, OnInit } from '@angular/core';
import {StreamService} from '../../services/stream.service';
import { ActivatedRoute, Router } from '@angular/router';
//import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  title = 'Это ни разу не блог';

  curentPage = 1;
  private $sub: any;
  
  categories = [
    {"id":"chillout","name":"Chillout","url":"https:\/\/hearthis.at\/categories\/chillout\/","api_url":"https:\/\/api-v2.hearthis.at\/categories\/chillout\/"}
  ]; 
  cat = this.categories[0].id;
  categorieid = '';
  constructor(public _streamService: StreamService,
              private route: ActivatedRoute,
              private router: Router) { }
  
  onChange(categories) {
    this.cat = categories;
    this.loadPage();
  }

  ngOnInit() {
    this.loadCats();

    this.$sub = this.route.params.subscribe(params => {
      const page = +params['page'];
      if(page>0 && page<100)
      {
        this.curentPage = page;
        this.loadPage();
      }
      else
      {
        this.router.navigate([`/page/1`]);
      }
      
   });
   
  }
  
  nextPage() {
    this.curentPage++;
    this.router.navigate([`/page/${this.curentPage}`]);
  }

  prevPage() {
    this.curentPage--;
    this.router.navigate([`/page/${this.curentPage}`]);
  }

  loadPage() {
    this._streamService.getTracks(this.curentPage, this.cat)
      .subscribe((data)=> {
        this._streamService.setTracks(data);
      });
  }

  loadCats() {
    this._streamService.getCategories()
      .subscribe((data)=> {
        this._streamService.setCategories(data);
        this.categorieid = this.categories[0].id;
      });
  }

}
