import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-item-nav',
  templateUrl: './item-nav.component.html',
  styleUrls: ['./item-nav.component.css']
})
export class ItemNavComponent implements OnInit {
@Input() item;
  constructor() { }

  ngOnInit() {
  }

}
