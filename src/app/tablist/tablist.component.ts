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
  @ViewChild('tab3') tab3:ElementRef;
  @ViewChild('tab4') tab4:ElementRef;
  @ViewChild('tabPanel') tabPanel:ElementRef;

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
      this.renderer.addClass(this.tab1.nativeElement, 'active'); 
      this.renderer.setAttribute(this.tabPanel.nativeElement, 'aria-labelledby', 't1'); 
    }

    if(tabNumber === 2){
      this.tabContent = "Tab 2 Content Lorem impsum...";
      this.renderer.setAttribute(this.tab2.nativeElement, 'tabindex', '0'); 
      this.renderer.setAttribute(this.tab2.nativeElement, 'aria-selected', 'true'); 
      this.renderer.setAttribute(this.tab2.nativeElement, 'aria-controls', 'theTabPanel'); 
      this.renderer.addClass(this.tab2.nativeElement, 'active'); 
      this.renderer.setAttribute(this.tabPanel.nativeElement, 'aria-labelledby', 't2'); 
    }

    if(tabNumber === 3){
      this.tabContent = "Tab 3 Content Lorem impsum...";
      this.renderer.setAttribute(this.tab3.nativeElement, 'tabindex', '0'); 
      this.renderer.setAttribute(this.tab3.nativeElement, 'aria-selected', 'true'); 
      this.renderer.setAttribute(this.tab3.nativeElement, 'aria-controls', 'theTabPanel'); 
      this.renderer.addClass(this.tab3.nativeElement, 'active'); 
      this.renderer.setAttribute(this.tabPanel.nativeElement, 'aria-labelledby', 't3'); 
    }

    if(tabNumber === 4){
      this.tabContent = "Tab 4 Content Lorem impsum...";
      this.renderer.setAttribute(this.tab4.nativeElement, 'tabindex', '0'); 
      this.renderer.setAttribute(this.tab4.nativeElement, 'aria-selected', 'true'); 
      this.renderer.setAttribute(this.tab4.nativeElement, 'aria-controls', 'theTabPanel'); 
      this.renderer.addClass(this.tab4.nativeElement, 'active'); 
      this.renderer.setAttribute(this.tabPanel.nativeElement, 'aria-labelledby', 't4'); 
    }

  }

  resetTabs () {
    //Reset tab 1
    this.renderer.setAttribute(this.tab1.nativeElement, 'tabindex', '-1'); 
    this.renderer.setAttribute(this.tab1.nativeElement, 'aria-selected', 'false'); 
    this.renderer.setAttribute(this.tab1.nativeElement, 'aria-expanded', 'false');
    this.renderer.setAttribute(this.tab1.nativeElement, 'aria-controls', ''); 
    this.renderer.setAttribute(this.tabPanel.nativeElement, 'aria-labelledby', ''); 
    this.renderer.removeClass(this.tab1.nativeElement, 'active'); 

    //Reset tab 2
    this.renderer.setAttribute(this.tab2.nativeElement, 'tabindex', '-1'); 
    this.renderer.setAttribute(this.tab2.nativeElement, 'aria-selected', 'false'); 
    this.renderer.setAttribute(this.tab2.nativeElement, 'aria-expanded', 'false');
    this.renderer.setAttribute(this.tab2.nativeElement, 'aria-controls', ''); 
    this.renderer.setAttribute(this.tabPanel.nativeElement, 'aria-labelledby', ''); 
    this.renderer.removeClass(this.tab2.nativeElement, 'active'); 

    //Reset tab 3
    this.renderer.setAttribute(this.tab3.nativeElement, 'tabindex', '-1'); 
    this.renderer.setAttribute(this.tab3.nativeElement, 'aria-selected', 'false'); 
    this.renderer.setAttribute(this.tab3.nativeElement, 'aria-expanded', 'false');
    this.renderer.setAttribute(this.tab3.nativeElement, 'aria-controls', ''); 
    this.renderer.setAttribute(this.tabPanel.nativeElement, 'aria-labelledby', ''); 
    this.renderer.removeClass(this.tab3.nativeElement, 'active'); 

    //Reset tab 4
    this.renderer.setAttribute(this.tab4.nativeElement, 'tabindex', '-1'); 
    this.renderer.setAttribute(this.tab4.nativeElement, 'aria-selected', 'false'); 
    this.renderer.setAttribute(this.tab4.nativeElement, 'aria-expanded', 'false');
    this.renderer.setAttribute(this.tab4.nativeElement, 'aria-controls', ''); 
    this.renderer.setAttribute(this.tabPanel.nativeElement, 'aria-labelledby', ''); 
    this.renderer.removeClass(this.tab4.nativeElement, 'active'); 

  } 

  handleKeydownOnTabs(event, tabNumber: number, ){

    event.preventDefault();

    if(event.key === 'Enter'){
      this.setTabContent(tabNumber);
    }

    if(event.key === 'ArrowDown' || event.key === 'ArrowRight'){
      //First tab
      if(tabNumber === 1){
        this.tab2.nativeElement.focus();
      }
      if(tabNumber === 2){
        this.tab3.nativeElement.focus();
      }
      if(tabNumber === 3){
        this.tab4.nativeElement.focus();
      }
      if(tabNumber === 4){
        this.tab1.nativeElement.focus();
      }

    }

    if(event.key === 'ArrowUp' || event.key === 'ArrowLeft'){
      //First tab
      if(tabNumber === 1){
        this.tab4.nativeElement.focus();
      }
      if(tabNumber === 2){
        this.tab1.nativeElement.focus();
      }
      if(tabNumber === 3){
        this.tab2.nativeElement.focus();
      }
      if(tabNumber === 4){
        this.tab3.nativeElement.focus();
      }

    }

  }

}
