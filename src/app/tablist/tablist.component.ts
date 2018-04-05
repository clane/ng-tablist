import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.css']
})
export class TablistComponent implements OnInit {

  tabContent: string;
 

  @ViewChild('tab1') tab1:ElementRef;
  @ViewChild('tab2') tab2:ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() { 
    //Reset the tabs at first
    this.resetTabs();
    //add tab 1 to the tab order to start
    this.setTabContent(1); 
  }

  setTabContent(tabNumber: number) {
    this.resetTabs();
  

    if(tabNumber === 1){
      this.tabContent = "Tab 1 Content Lorem impsum...";
      this.renderer.setAttribute(this.tab1.nativeElement, 'tabindex', '0'); 
      this.renderer.setAttribute(this.tab1.nativeElement, 'aria-selected', 'true'); 
      this.renderer.setAttribute(this.tab1.nativeElement, 'aria-controls', 'theTabPanel'); 
    }

    if(tabNumber === 2){
      this.tabContent = "Tab 2 Content Lorem impsum...";
      this.renderer.setAttribute(this.tab2.nativeElement, 'tabindex', '0'); 
      this.renderer.setAttribute(this.tab2.nativeElement, 'aria-selected', 'true'); 
      this.renderer.setAttribute(this.tab2.nativeElement, 'aria-controls', 'theTabPanel'); 
    }

  }

  resetTabs () {
    //Reset tab 1
    this.renderer.setAttribute(this.tab1.nativeElement, 'tabindex', '-1'); 
    this.renderer.setAttribute(this.tab1.nativeElement, 'aria-selected', 'false'); 
    this.renderer.setAttribute(this.tab1.nativeElement, 'aria-expanded', 'false');
    this.renderer.setAttribute(this.tab1.nativeElement, 'aria-controls', ''); 

    //Reset tab 2
    this.renderer.setAttribute(this.tab2.nativeElement, 'tabindex', '-1'); 
    this.renderer.setAttribute(this.tab2.nativeElement, 'aria-selected', 'false'); 
    this.renderer.setAttribute(this.tab2.nativeElement, 'aria-expanded', 'false');
    this.renderer.setAttribute(this.tab2.nativeElement, 'aria-controls', ''); 
  } 

  handleKeydownOnTabs(event, tabNumber: number, ){
    console.log(event);
    console.log('in handleKeydownOnTabs'); 
    event.preventDefault();
    if(event.key === 'Enter'){
      this.setTabContent(tabNumber);
    }
    if(event.key === 'ArrowDown' || event.key === 'ArrowRight'){
      if(tabNumber === 1){
        this.tab2.nativeElement.focus();
      }
      if(tabNumber === 1){
        this.tab2.nativeElement.focus();
      }
    }

  }

}
