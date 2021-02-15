import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { HostListener } from "@angular/core";
declare const window: any;
declare var $: any;
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
@HostListener("window:scroll", ["$event"])
export class HeaderComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Output() headerValue = new EventEmitter();
  textValue: number;
  checking = "Ram";
  scroll: boolean = false;
  constructor() {}

  scrolling = (s) => {
    let sc = s.target.scrollingElement.scrollTop;
    if (sc >= 400) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  };
  loadingTest = () => {
    console.log(this.textValue);
    this.textValue = this.textValue + 1;
    this.valueChange.emit(this.textValue);
    // tslint:disable-next-line:semicolon
  };

  ngOnInit() {
    window.addEventListener("scroll", this.scrolling, true);
  }
  sectionTravel(val){
  //  window.scrollBy(100, 100);
    //console.log("about")
    console.log({val})
    this.headerValue.emit(val)
  }
  // skill(){
  //   this.headerValue.emit("skills clicked")
  // }
}
