import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'This is where the Photos are';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://img00.deviantart.net/1d87/i/2016/079/7/7/worm____leviathan_by_dertodesbote-d9vt18o.jpg';
  image3 = 'https://pre03.deviantart.net/b6c6/th/pre/f/2016/006/a/a/worm___endbringer_behemoth_by_sandara-d9n1huj.jpg';

  constructor() { }

  ngOnInit() {
  }

}