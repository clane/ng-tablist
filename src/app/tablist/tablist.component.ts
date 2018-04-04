import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.css']
})
export class TablistComponent implements OnInit {
  
  currentTab: number;
  tabData: { tab1: "tab 1 content ...", tab2: "tab 2 content ...",};


  constructor() {
      this.currentTab = 0; 

   }

  ngOnInit() {
  }

}
