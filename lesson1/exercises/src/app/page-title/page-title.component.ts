import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  title;
  constructor() {
    this.title = "Here is my title, I hope you like it"
   }

  ngOnInit() {
  }

}
