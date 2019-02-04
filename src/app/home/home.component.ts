import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BeerService } from '../beer.service';
import { FilterPipe} from '../filter.pipe';

export interface Skills {
  name: string;
  description: string;
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ FilterPipe ]
})
export class HomeComponent implements OnInit {


  beerDetail:any;
  order:any;
  ascending:any;
  searchText:any;
  beerStyle;any;
  styles: string[];
  itemCount: string;
  itemCountNum: number;

  options = [
    { name: "English", value: 'English' },
    { name: "Japanese", value: 'Japanese' },
    { name: "French", value: 'French' },
    { name: "Mandarin", value: 'Mandarin' },
    { name: "Aboriginal", value: 'Aboriginal' },
    { name: "Spanish", value: 'Spanish' },
    { name: "French", value: 'French' }
  ]


  constructor(private beerService: BeerService, 
    private cookieService: CookieService ) {
   }

  ngOnInit() {
    this.getData();
    if(this.cookieService.get('itemCount')){
      this.itemCount=this.cookieService.get('itemCount');
    }
    else{
      this.itemCount='0';
    }
  }


  getData() {
    this.beerService.getConfig()
      .subscribe((data) => {
        this.beerDetail = data;
        const style = this.beerDetail.map(data => data.style);
        this.styles = style.filter((x, i, a) => x && a.indexOf(x) === i);
      });
  }

  addItemtoCart(){
    this.itemCountNum=+this.cookieService.get('itemCount')+1;
    this.itemCount=this.itemCountNum.toString();
    this.cookieService.set( 'itemCount', this.itemCount );
  }
  removefromCart(){
    if(+this.cookieService.get('itemCount')!=0)
    this.itemCountNum=+this.cookieService.get('itemCount')-1;
    this.itemCount=this.itemCountNum.toString();
    this.cookieService.set( 'itemCount', this.itemCount );
  }


}
