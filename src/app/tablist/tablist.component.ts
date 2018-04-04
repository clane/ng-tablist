import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.css']
})
export class TablistComponent implements OnInit {

  tabContent: string;
  currentTab: number;

  @ViewChild('tab1') tab1:ElementRef;
  @ViewChild('tab2') tab2:ElementRef;

  constructor(private renderer: Renderer2) {
    this.tabContent = "tab content will go here";

  }

  ngOnInit() { 
    //Reset the tabs at first
    this.resetTabs();
    //add tab 1 to the tab order to start
    this.renderer.setAttribute(this.tab1.nativeElement, 'tabindex', '0'); 
  }

  setTabContent(tabNumber: number) {
    this.resetTabs();
    this.currentTab = tabNumber;

    if(tabNumber === 1){
      this.tabContent = "Tab 1 Content Lorem impsum...";
      this.renderer.setAttribute(this.tab1.nativeElement, 'tabindex', '0'); 
      this.renderer.setAttribute(this.tab1.nativeElement, 'aria-selected', 'true'); 
      this.renderer.setAttribute(this.tab1.nativeElement, 'aria-expanded', 'true'); 
      
    }
    if(tabNumber === 2){
      this.tabContent = "Tab 2 Content Lorem impsum...";
      this.renderer.setAttribute(this.tab2.nativeElement, 'tabindex', '0'); 
      this.renderer.setAttribute(this.tab2.nativeElement, 'aria-selected', 'true'); 
      this.renderer.setAttribute(this.tab2.nativeElement, 'aria-expanded', 'true'); 
    }

  }

  resetTabs () {
  
    //Reset tab 1
    this.renderer.setAttribute(this.tab1.nativeElement, 'tabindex', '-1'); 
    this.renderer.setAttribute(this.tab1.nativeElement, 'aria-selected', 'false'); 
    this.renderer.setAttribute(this.tab1.nativeElement, 'aria-expanded', 'false');

    //Reset tab 2
    this.renderer.setAttribute(this.tab2.nativeElement, 'tabindex', '-1'); 
    this.renderer.setAttribute(this.tab2.nativeElement, 'aria-selected', 'false'); 
    this.renderer.setAttribute(this.tab2.nativeElement, 'aria-expanded', 'false');



  } 

}
