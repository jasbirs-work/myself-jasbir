import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-color-info-card",
  templateUrl: "./color-info-card.component.html",
  styleUrls: ["./color-info-card.component.scss"],
})
export class ColorInfoCardComponent implements OnInit {
  @Input() institue: string;
  @Input() designationRole: string;
  @Input() bgGreen: boolean;
  @Input() imagePath: string;
  @Input() name: string;
  @Input() role: string;
  @Input() reference: string;
  @Input() experienceSpan: string;
  @Input() companyName: string;
  @Input() experienceDetails: string;
  constructor() {}

  ngOnInit() {}
}
