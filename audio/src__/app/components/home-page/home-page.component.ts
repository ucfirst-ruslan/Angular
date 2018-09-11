import { Component, OnInit } from '@angular/core';
import {StreamService} from '../../services/stream.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  title = 'Это ни разу не блог';

  constructor(public _streamService: StreamService,
              private route: ActivatedRoute,
              private router: Router) { }

  curentPage = 1;
  private $sub: any;

  ngOnInit() {
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
    this._streamService.getTracks(this.curentPage)
      .subscribe((data)=> {
        this._streamService.setTracks(data);
      });
  }

}
