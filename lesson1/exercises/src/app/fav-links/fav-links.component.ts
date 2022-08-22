import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favlinks;
  constructor() { 
    this.favlinks = ['https://parahumans.wordpress.com/2011/06/11/1-1/', 'https://palewebserial.wordpress.com/about/']
  }

  ngOnInit() {
  }

}
