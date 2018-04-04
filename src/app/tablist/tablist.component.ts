import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.css']
})
export class TablistComponent implements OnInit {
  

  tabContent: string;

  constructor() {
      this.tabContent = "tab content will go here";
   }

  ngOnInit() {
  }

  setTabContent(tabNumber: number) {
    if(tabNumber === 1){
      this.tabContent = "Tab 1 Content Lorem impsum...";
    }
    if(tabNumber === 2){
      this.tabContent = "Tab 2 Content Lorem impsum...";
    }

  }

}
