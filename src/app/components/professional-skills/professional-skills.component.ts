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
  skillAngular: string = "ANGULAR";
  skillAngularPrecentage: string = "80";
  skillAngularJS: string = "ANGULAR JS";
  skillAngularJSPrecentage: string = "50";
  skillSASS: string = "SASS";
  skillSASSPrecentage: string = "80";
  constructor() {}

  ngOnInit() {}
}
