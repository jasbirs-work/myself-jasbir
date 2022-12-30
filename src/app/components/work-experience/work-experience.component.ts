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
        "This job involved website development and design using different technologies, where i was given training on different front-end technologies that inluded HTML5, CSS, Javascript, ES6, and JS frameworks. ",
      designation: "Graduate Trainee"
    },
    {
      id: 2,
      name: "Jasbir",
      experienceSpan: "January 2019 - May 2021",

      companyName: "Optimize IT Systems",
      experienceDetails:
        "This job involves website & apps developments and design using different technologies such as Javascript, Angular 8, React Native, HTML, CSS, Bootstrap 4+, LESS, SASS, Material UI Framworks, NG-Bootstrap and many more. This job also involves Live Client support for existing projects for enhancements in different technologies.",
      designation: "Software Developer"
    },
    {
      id: 3,
      name: "Jasbir",
      experienceSpan: "May 2021 - PRESENT",

      companyName: "Deloitte",
      experienceDetails:
        "Full Stack",
      designation: "Consultant"
    },
  ];
  constructor() {}

  ngOnInit() {}
}
