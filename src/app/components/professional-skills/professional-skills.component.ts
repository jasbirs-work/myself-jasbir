import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-professional-skills",
  templateUrl: "./professional-skills.component.html",
  styleUrls: ["./professional-skills.component.scss"],
})
export class ProfessionalSkillsComponent implements OnInit {
  skillHtml: string = "HTML";
  skillHtmlPrecentage: string = "80";
  skillCSS: string = "CSS";
  skillCSSPrecentage: string = "80";
  skillBootstrap4: string = "CSS";
  skillBootstrap4Precentage: string = "80";
  skillJS: string = "JAVASCRIPT";
  skillJSPrecentage: string = "75";
  skillTypescript: string = "TYPESCRIPT";
  skillTypescriptPrecentage: string = "75";
  skillAngular10: string = "ANGULAR 10";
  skillAngular10Precentage: string = "80";
  skillAngular8: string = "ANGULAR 8";
  skillAngular8Precentage: string = "75";
  skillSASS: string = "SASS";
  skillSASSPrecentage: string = "80";
  constructor() {}

  ngOnInit() {}
}
