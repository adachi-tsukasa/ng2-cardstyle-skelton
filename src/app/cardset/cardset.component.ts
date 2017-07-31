import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-set',
  templateUrl: './cardset.component.html',
  styleUrls: ['./cardset.component.css'],
})
export class CardsetComponent implements OnInit {
  filterValue: string = "";
  dataset = { 
              title: 'hoge',
              text: 'With supporting text.'
            };
  datas: any[] = Array(5).fill(this.dataset);
  constructor() { }

  ngOnInit() {
  }

}
