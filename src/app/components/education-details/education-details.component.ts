import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-education-details",
  templateUrl: "./education-details.component.html",
  styleUrls: ["./education-details.component.scss"],
})
export class EducationDetailsComponent implements OnInit {
  educationInfo = [
    {
      id: 1,
      name: "Jasbir",
      educationSpan: "2014 - 2018",
      institute: "Guru Nanak Institute of Technology",
      degree: "Bachelors Degree",
      degreeName: "Bachelor of Technology",
      educationDetails:
        "I completed my Bachelor of Technology in Computer Science and Engineering from M.A.K.A.U.T(WBUT) in Guru Nanak Institute of Technology in 2018, securing 78.7% Score.",
    },
    {
      id: 2,
      name: "Jasbir",
      educationSpan: "2014",
      institute: "Little Star High School",
      degree: "ISC",
      degreeName: "COUNCIL FOR THE INDIAN SCHOOL CERTIFICATE EXAMINATIONS",
      educationDetails:
        "I have completed my Higher Secondary in 2014 from COUNCIL FOR THE INDIAN SCHOOL CERTIFICATE EXAMINATIONS in Little Star High School securing 70.25% Score",
    },
    {
      id: 3,
      name: "Jasbir",
      educationSpan: "2012",
      institute: "Little Star High School",
      degree: "ICSE",
      degreeName: "Indian Certificate of Secondary Education",
      educationDetails:
        "I have completed my Secondary examination in 2012 from Indian Certificate of Secondary Education in Little Star High School securing 66.75% Score",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
