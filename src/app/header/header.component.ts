import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tabId:Number
  constructor() { }

  ngOnInit(): void {
    this.tabId = 1
  }
  selectTab(tabId){
    this.tabId = tabId
  }
}
