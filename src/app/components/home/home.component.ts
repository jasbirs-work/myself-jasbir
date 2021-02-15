import { ViewportScroller } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private vps: ViewportScroller) { }

  ngOnInit() {
  }
  sectionRender(e){
    console.log({e});
    // window.document.getElementById("workexperience").scrollIntoView();
    this.vps.scrollToAnchor(e);
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log({changes});
  //   console.log("hello");
  // }
}
