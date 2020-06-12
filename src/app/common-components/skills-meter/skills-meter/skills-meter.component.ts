import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-skills-meter",
  templateUrl: "./skills-meter.component.html",
  styleUrls: ["./skills-meter.component.scss"],
})
export class SkillsMeterComponent implements OnInit {
  @Input() skill: string;
  @Input() skillPrecentage: string;

  constructor() {}

  ngOnInit() {}
}
