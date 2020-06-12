import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.scss"],
})
export class WorkExperienceComponent implements OnInit {
  experienceSpan = "MARCH 2016 - PRESENT";
  companyName = "CREATIVEM";
  employeeInfo = [
    {
      id: 1,
      name: "Jasbir",
      experienceSpan: "Aug 2018 - Dec 2018",

      companyName: "Optimize IT Systems",
      experienceDetails:
        "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.",
      designation: "Graduate Trainee",
      institute: "Guru Nanak Institute of Technology",
      degree: "Bachelors Degree",
      degreeName: "Bachelor of Technology",
    },
    {
      id: 2,
      name: "Jasbir",
      experienceSpan: "January 2019 - PRESENT",

      companyName: "Optimize IT Systems",
      experienceDetails:
        "Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.",
      designation: "Software Developer",
      institute: "Guru Nanak Institute of Technology",
      degree: "Bachelors Degree",
      degreeName: "Bachelor of Technology",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
