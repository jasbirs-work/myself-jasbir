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
        "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.",
    },
    {
      id: 2,
      name: "Jasbir",
      educationSpan: "2014",
      institute: "Little Star High School",
      degree: "ISC",
      degreeName: "COUNCIL FOR THE INDIAN SCHOOL CERTIFICATE EXAMINATIONS",
      educationDetails:
        "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.",
    },
    {
      id: 3,
      name: "Jasbir",
      educationSpan: "2012",
      institute: "Little Star High School",
      degree: "ICSE",
      degreeName: "Indian Certificate of Secondary Education",
      educationDetails:
        "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
