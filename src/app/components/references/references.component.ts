import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { ViewEncapsulation } from "@angular/core";
@Component({
  selector: "app-references",
  templateUrl: "./references.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./references.component.scss"],
})
export class ReferencesComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  public references = [
    {
      id: 1,
      name: "Aiyana",
      role: "CEO / WEBM",
      imagePath: "assets/reference-image-1.jpg",
      ref:
        "Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.",
    },
    {
      id: 2,
      name: "Braiden",
      role: "CEO / CREATIVEM",
      imagePath: "assets/reference-image-2.jpg",
      ref:
        "Braiden Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.",
    },
    {
      id: 3,
      name: "Alexander",
      role: "CEO / WEBNOTE",
      imagePath: "assets/reference-image-3.jpg",
      ref:
        "Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.",
    },
  ];

  constructor(config: NgbCarouselConfig) {
    // config.showNavigationArrows = true;
    // config.showNavigationIndicators = true;
  }

  ngOnInit() {
    // this.references.map((n) => {
    //   if (n.name == "Braiden") {
    //     console.log("ref", n);
    //   }
    // });
  }
}
