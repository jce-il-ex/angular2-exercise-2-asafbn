import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
list=[
  {
    id:1
  },
  {
    id:2
  },
  {
    id:3
  },
  {
    id:4
  }
];
  constructor() { }

  ngOnInit() {
  }

}
