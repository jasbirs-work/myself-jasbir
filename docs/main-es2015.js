(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/buttons/custom-buttons/custom-buttons.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/buttons/custom-buttons/custom-buttons.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-stroked-button>\n  <ng-content></ng-content>\n</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/color-info-card/color-info-card.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/color-info-card/color-info-card.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"bgGreen;else other_content\">\n  <mat-card>\n    <div class=\"row custom-edit\">\n      <div class=\"col-sm-3\">\n        <div *ngIf=\"experienceSpan && companyName\" class=\"text-center customInfo\">\n          <p>{{experienceSpan}}</p>\n          <h5>{{companyName}}</h5>\n        </div>\n      </div>\n      <div class=\"col-sm-9\">\n        <div class=\"card-body informations\">\n          <h5 *ngIf=\"designationRole\">{{designationRole}}</h5>\n          <h6 class=\"d-flex category\" *ngIf=\"institue\">{{institue}}</h6>\n          <p class=\"experience\" *ngIf=\"experienceDetails\">{{experienceDetails}}</p>\n        </div>\n      </div>\n    </div>\n  </mat-card>\n</div>\n<ng-template #other_content>\n  <mat-card>\n    <div class=\"row\">\n      <div class=\"col-sm-3 ref-img-wrapper\">\n        <div class=\"text-center \">\n          <div *ngIf=\"imagePath\" class=\"person-wrapper\">\n            <img [src]=\"imagePath\" alt=\"\" srcset=\"\">\n          </div>\n          <p>{{name}}</p>\n          <h5 class=\"category\">{{role}}</h5>\n        </div>\n      </div>\n      <div class=\"col-sm-9\">\n        <div class=\"card-body informations\">\n          <h5 *ngIf=\"designationRole\">Front End Developer</h5>\n          <h6 *ngIf=\"institue\"> college name </h6>\n          <p>{{reference}}</p>\n        </div>\n      </div>\n    </div>\n  </mat-card>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/custom-card/custom-card.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/custom-card/custom-card.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <ng-content></ng-content>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/skills-meter/skills-meter/skills-meter.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/skills-meter/skills-meter/skills-meter.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"skills-container\">\n  <div class=\"skills\">\n\n    <span>{{skill}}</span>\n    <span>{{skillPrecentage}}%</span>\n\n  </div>\n\n  <div class=\"percent-complete-container\">\n    <div class=\"percent-complete\">\n      <!-- <mat-progress-bar mode=\"determinate\" value=\"80\"></mat-progress-bar> -->\n      <p>\n        <ngb-progressbar type=\"warning\" [value]=skillPrecentage [striped]=\"true\" [animated]=\"true\">\n          <i>{{skillPrecentage}}%</i></ngb-progressbar>\n      </p>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/social-links/social-links.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/social-links/social-links.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex\">\n\n  <div *ngIf=\"greycirclebg;else blankdiv\">\n    <div class=\"conLogo\">\n      <span class=\"conIcon\"><img [src]=\"image\" alt=\"\"></span>\n    </div>\n\n  </div>\n  <ng-template #blankdiv>\n    <div class=\"conLogoblank\">\n      <span class=\"conIcon\"><img [src]=\"image\" alt=\"\"></span>\n    </div>\n  </ng-template>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about-me/about-me.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about-me/about-me.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container about-me-wrap\">\n  <div class=\"container text-center position-relative\">\n    <div class=\"d-flex justify-content-center about-social-wrap\">\n      <app-social-links [greycirclebg]=\"false\" image=\"assets/linked-in.png\"></app-social-links>\n      <app-social-links [greycirclebg]=\"false\" image=\"assets/facebook-hd.png\"></app-social-links>\n      <app-social-links [greycirclebg]=\"false\" image=\"assets/whatsapp.png\"></app-social-links>\n      <app-social-links [greycirclebg]=\"false\" image=\"assets/twitter.png\"></app-social-links>\n    </div>\n  </div>\n  <mat-card>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"about-info\">\n          <h4>About</h4>\n          <p>\n            Hello! I am Jasbir Singh. Software Developer.\n\n            Client-focused Junior software development professional with 4+ years in\n            software design development of innovative applications.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-sm-6 details\">\n        <h4>Basic Information</h4>\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <strong class=\"text-uppercase\">Age :</strong>\n          </div>\n          <div class=\"col-sm-8\">\n            <span>27</span>\n          </div>\n        </div>\n        <div class=\"row mt-3\">\n          <div class=\"col-sm-4\"><strong class=\"text-uppercase\">Email:</strong></div>\n          <div class=\"col-sm-8\"><span>jasbirsinghmejas1@gmail.com</span></div>\n\n        </div>\n        <div class=\"row mt-3\">\n          <div class=\"col-sm-4\"><strong class=\"text-uppercase\">Phone:</strong></div>\n          <div class=\"col-sm-8\"><span>+91 8961242370</span></div>\n        </div>\n        <div class=\"row mt-3\">\n          <div class=\"col-sm-4\"><strong class=\"text-uppercase\">Address:</strong></div>\n          <div class=\"col-sm-8\"><span>East Sapuipara, Bally, Howrah, West Bengal, India</span></div>\n        </div>\n        <div class=\"row mt-3\">\n          <div class=\"col-sm-4\"><strong class=\"text-uppercase\">Language:</strong></div>\n          <div class=\"col-sm-8\"><span>Hindi, English, Bengali</span></div>\n        </div>\n\n      </div>\n    </div>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-me/contact-me.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-me/contact-me.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cc-contact-information\">\n  \n  <div class=\"container\">\n    <div class=\"cc-contact\">\n      <div class=\"row\">\n        <div class=\"col-md-9\">\n          <div class=\"card mb-0 contact-me-wrap\">\n            <div class=\"h4 text-center title\">Contact Me</div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"card-body\">\n                  <form method=\"POST\">\n                    <div class=\"p pb-3\"><strong>Feel free to contact me </strong></div>\n                    <div class=\"row mb-3\">\n                      <div class=\"col\">\n                        <div class=\"input-group\"><span class=\"input-group-addon\"></span>\n                          <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Name\" required=\"required\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row mb-3\">\n                      <div class=\"col\">\n                        <div class=\"input-group\"><span class=\"input-group-addon\"></span>\n                          <input class=\"form-control\" type=\"text\" name=\"Subject\" placeholder=\"Subject\"\n                            required=\"required\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row mb-3\">\n                      <div class=\"col\">\n                        <div class=\"input-group\"><span class=\"input-group-addon\"></span>\n                          <input class=\"form-control\" type=\"email\" name=\"_replyto\" placeholder=\"E-mail\"\n                            required=\"required\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row mb-3\">\n                      <div class=\"col\">\n                        <div class=\"form-group\">\n                          <textarea class=\"form-control\" name=\"message\" placeholder=\"Your Message\"\n                            required=\"required\"></textarea>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col\">\n                        <a href=\"mailto:jasbirsinghmejas1@gmail.com\">\n                          <button class=\"btn btn-primary\" type=\"submit\">Send</button>\n                        </a>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"card-body\">\n                  <p class=\"mb-0\"><strong>Address </strong></p>\n                  <p class=\"pb-2\">Bally, Howrah, West Bengal, PIN-711227</p>\n                  <p class=\"mb-0\"><strong>Phone</strong></p>\n                  <p class=\"pb-2\">+91 8961242370</p>\n                  <p class=\"mb-0\"><strong>Email</strong></p>\n                  <p>jasbirsinghmejas1@gmail.com</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education-details/education-details.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/education-details/education-details.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center education-wrap\">\n  <h3>Education</h3>\n  <app-color-info-card [bgGreen]=true [companyName]=\"educationInfo[0].degree\" [institue]=\"educationInfo[0].institute\"\n    [experienceSpan]=\"educationInfo[0].educationSpan\" [designationRole]=\"educationInfo[0].degreeName\"\n    [experienceDetails]=\"educationInfo[0].educationDetails\">\n  </app-color-info-card>\n  <app-color-info-card [bgGreen]=true [companyName]=\"educationInfo[1].degree\" [institue]=\"educationInfo[1].institute\"\n    [experienceSpan]=\"educationInfo[1].educationSpan\" [designationRole]=\"educationInfo[1].degreeName\"\n    [experienceDetails]=\"educationInfo[1].educationDetails\">\n  </app-color-info-card>\n  <app-color-info-card [bgGreen]=true [companyName]=\"educationInfo[2].degree\" [institue]=\"educationInfo[2].institute\"\n    [experienceSpan]=\"educationInfo[2].educationSpan\" [designationRole]=\"educationInfo[2].degreeName\"\n    [experienceDetails]=\"educationInfo[2].educationDetails\">\n  </app-color-info-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n  <div class=\"container text-center\">\n    <div class=\"d-flex justify-content-center\">\n      <app-social-links [greycirclebg]=\"false\" image=\"assets/linked-in.png\"></app-social-links>\n      <app-social-links [greycirclebg]=\"false\" image=\"assets/social-media-fb.png\"></app-social-links>\n      <app-social-links [greycirclebg]=\"false\" image=\"assets/whatsapp.png\"></app-social-links>\n      <app-social-links [greycirclebg]=\"false\" image=\"assets/twitter.png\"></app-social-links>\n    </div>\n  </div>\n  <div class=\"h4 title text-center\">Jasbir Singh</div>\n  <!-- <div class=\"text-center text-muted\">\n    <p>© Creative CV. All rights reserved.<br>Design - <a class=\"credit\" href=\"https://templateflip.com\"\n        target=\"_blank\">TemplateFlip</a></p>\n    <p> Icons made by <a href=\"https://www.flaticon.com/authors/freepik\" title=\"Freepik\">Freepik</a> from <a\n        href=\"https://www.flaticon.com/\" title=\"Flaticon\"> www.flaticon.com</a> </p>\n  </div> -->\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-page sidebar-collapse\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark fixed-top  navbar-transparent\">\n    <a class=\" navbar-brand\" href=\"#\">Myself Jasbir</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample05\"\n      aria-controls=\"navbarsExample05\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarsExample05\">\n      <ul class=\"navbar-nav\">\n\n        <!-- <div class=\"collapse navbar-collapse \" id=\"navigation\"> -->\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\"><a class=\"nav-link smooth-scroll\" (click)=\"sectionTravel('aboutme')\" href=\"#about\">About</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link smooth-scroll\" (click)=\"sectionTravel('myskills')\" href=\"#skill\">Skills</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link smooth-scroll\"(click)=\"sectionTravel('educationdetails')\" href=\"#portfolio\">Education</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link smooth-scroll\" (click)=\"sectionTravel('workexperience')\" href=\"#experience\">Experience</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link smooth-scroll\" (click)=\"sectionTravel('contactme')\" href=\"#contact\">Contact</a></li>\n        </ul>\n        <!-- </div> -->\n      </ul>\n\n    </div>\n  </nav>\n  <div class=\"level\" (scroll)=\"scrolling($event)\" [ngClass]=\"{'level-trans': scroll}\">\n    <!-- your template -->\n  </div>\n</div>\n\n<div class=\"page-header page-header-small\" filter-color=\"green\">\n  <div class=\"page-header-image\">\n  </div>\n  <div class=\"container\">\n    <div class=\"content-center text-center\">\n      <div class=\"cc-profile-image\"><a href=\"#\" class=\"pulse\"><img src=\"assets/my-img.jpg\" alt=\"Image\"></a>\n      </div>\n      <div class=\"h2 myname\">Jasbir Singh</div>\n      <p class=\"category designation text-white\">Software Developer</p>\n      <div class=\"d-flex justify-content-center\">\n        <div class=\"hire-me\">\n          <!-- <app-custom-buttons>Hire Me</app-custom-buttons> -->\n          <button mat-stroked-button>\n            Hire Me\n          </button>\n        </div>\n        <div class=\"download-cv\">\n          <app-custom-buttons>Download CV</app-custom-buttons>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header (headerValue)=\"sectionRender($event)\"></app-header>\n<!-- (valueChange)=\"displaycounter($event)\" -->\n\n\n<!-- <router-outlet></router-outlet>\n<a href=\"\" routerLink=\"/social\" routerLinkActive=\"active\">social</a>\n<a href=\"\" routerLink=\"/header\" routerLinkActive=\"active\">header</a> -->\n<app-about-me id=\"aboutme\"></app-about-me>\n<app-professional-skills id=\"myskills\"></app-professional-skills>\n<app-work-experience id=\"workexperience\"></app-work-experience>\n<app-education-details id=\"educationdetails\"></app-education-details>\n<!-- References sections add later when you have reference-->\n<!-- <app-references></app-references> -->\n<app-contact-me id=\"contactme\"></app-contact-me>\n<app-footer id=\"footer\"></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professional-skills/professional-skills.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professional-skills/professional-skills.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container prof-skill-wrap\">\n  <div class=\"text-center\">\n    <h4> Professional Skills</h4>\n  </div>\n  <app-custom-card>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <app-skills-meter [skill]=\"skillJS\" [skillPrecentage]=\"skillJSPrecentage\"></app-skills-meter>\n      </div>\n      <div class=\"col-sm-6 skill-comm-padd\">\n        <app-skills-meter [skill]=\"skillTypescript\" [skillPrecentage]=\"skillTypescriptPrecentage\"></app-skills-meter>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <app-skills-meter [skill]=\"skillAngular\" [skillPrecentage]=\"skillAngularPrecentage\"></app-skills-meter>\n      </div>\n      <div class=\"col-sm-6 skill-comm-padd\">\n        <app-skills-meter [skill]=\"skillAngularJS\" [skillPrecentage]=\"skillAngularJSPrecentage\"></app-skills-meter>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <app-skills-meter [skill]=\"skillHtml\" [skillPrecentage]=\"skillHtmlPrecentage\"></app-skills-meter>\n      </div>\n      <div class=\"col-sm-6 skill-comm-padd\">\n        <app-skills-meter [skill]=\"skillCSS\" [skillPrecentage]=\"skillCSSPrecentage\"></app-skills-meter>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <app-skills-meter [skill]=\"skillBootstrap4\" [skillPrecentage]=\"skillBootstrap4Precentage\"></app-skills-meter>\n      </div>\n      <div class=\"col-sm-6 skill-comm-padd\">\n        <app-skills-meter [skill]=\"skillSASS\" [skillPrecentage]=\"skillSASSPrecentage\"></app-skills-meter>\n      </div>\n    </div>\n  </app-custom-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/references/references.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/references/references.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\">\n  <h3>References</h3>\n</div>\n<ngb-carousel *ngIf=\"images\" class=\"customCaraosal\">\n  <ng-template ngbSlide>\n    <div class=\"customSlides\">\n      <!-- <img [src]=\"images[0]\" alt=\"Random first slide\"> -->\n    </div>\n    <div class=\"carousel-caption \">\n      <div *ngIf=\"references\">\n        <app-color-info-card [imagePath]=\"references[0].imagePath\" [bgGreen]=false [reference]=references[0].ref\n          [name]=\"references[0].name\" [role]=\"references[0].role\"></app-color-info-card>\n      </div>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <div class=\"customSlides\">\n      <!-- <img [src]=\"images[1]\" alt=\"Random second slide\"> -->\n    </div>\n    <div class=\"carousel-caption\">\n      <div *ngIf=\"references\">\n        <app-color-info-card [imagePath]=\"references[1].imagePath\" [bgGreen]=false [reference]=references[1].ref\n          [name]=\"references[1].name\" [role]=\"references[1].role\"></app-color-info-card>\n      </div>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <div class=\"customSlides\">\n      <!-- <img [src]=\"images[2]\" alt=\"Random third slide\"> -->\n    </div>\n    <div class=\"carousel-caption\">\n      <div *ngIf=\"references\">\n        <app-color-info-card [imagePath]=\"references[2].imagePath\" [bgGreen]=false [reference]=references[2].ref\n          [name]=\"references[2].name\" [role]=\"references[2].role\"></app-color-info-card>\n      </div>\n    </div>\n  </ng-template>\n</ngb-carousel>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/work-experience/work-experience.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/work-experience/work-experience.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center work-exp-wrap\">\n  <h3>Work Experience</h3>\n  <app-color-info-card [bgGreen]=true [companyName]=\"employeeInfo[1].companyName\"\n    [experienceSpan]=\"employeeInfo[1].experienceSpan\" [designationRole]=\"employeeInfo[1].designation\"\n    [experienceDetails]=\"employeeInfo[1].experienceDetails\">\n  </app-color-info-card>\n  <app-color-info-card [bgGreen]=true [companyName]=\"employeeInfo[0].companyName\"\n    [experienceSpan]=\"employeeInfo[0].experienceSpan\" [designationRole]=\"employeeInfo[0].designation\"\n    [experienceDetails]=\"employeeInfo[0].experienceDetails\">\n  </app-color-info-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

const __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

const __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");




//
const routes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);

const routingComponents = [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]];


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "resume-portal-jasbir";
        /*  displaycounter = (value) => {
          console.log({ value });
        }; */
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header/header.component */ "./src/app/components/header/header/header.component.ts");
/* harmony import */ var _common_components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common-components/social-links/social-links.component */ "./src/app/common-components/social-links/social-links.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _common_components_buttons_custom_buttons_custom_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common-components/buttons/custom-buttons/custom-buttons.component */ "./src/app/common-components/buttons/custom-buttons/custom-buttons.component.ts");
/* harmony import */ var _components_about_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/about/about-me/about-me.component */ "./src/app/components/about/about-me/about-me.component.ts");
/* harmony import */ var _common_components_skills_meter_skills_meter_skills_meter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common-components/skills-meter/skills-meter/skills-meter.component */ "./src/app/common-components/skills-meter/skills-meter/skills-meter.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _common_components_custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common-components/custom-card/custom-card.component */ "./src/app/common-components/custom-card/custom-card.component.ts");
/* harmony import */ var _components_professional_skills_professional_skills_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/professional-skills/professional-skills.component */ "./src/app/components/professional-skills/professional-skills.component.ts");
/* harmony import */ var _components_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/work-experience/work-experience.component */ "./src/app/components/work-experience/work-experience.component.ts");
/* harmony import */ var _common_components_color_info_card_color_info_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common-components/color-info-card/color-info-card.component */ "./src/app/common-components/color-info-card/color-info-card.component.ts");
/* harmony import */ var _components_references_references_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/references/references.component */ "./src/app/components/references/references.component.ts");
/* harmony import */ var _components_education_details_education_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/education-details/education-details.component */ "./src/app/components/education-details/education-details.component.ts");
/* harmony import */ var _components_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/contact-me/contact-me.component */ "./src/app/components/contact-me/contact-me.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_header_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _common_components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_7__["SocialLinksComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
            _common_components_buttons_custom_buttons_custom_buttons_component__WEBPACK_IMPORTED_MODULE_10__["CustomButtonsComponent"],
            _components_about_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_11__["AboutMeComponent"],
            _common_components_skills_meter_skills_meter_skills_meter_component__WEBPACK_IMPORTED_MODULE_12__["SkillsMeterComponent"],
            _common_components_custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_14__["CustomCardComponent"],
            _components_professional_skills_professional_skills_component__WEBPACK_IMPORTED_MODULE_15__["ProfessionalSkillsComponent"],
            _components_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_16__["WorkExperienceComponent"],
            _common_components_color_info_card_color_info_card_component__WEBPACK_IMPORTED_MODULE_17__["ColorInfoCardComponent"],
            _components_references_references_component__WEBPACK_IMPORTED_MODULE_18__["ReferencesComponent"],
            _components_education_details_education_details_component__WEBPACK_IMPORTED_MODULE_19__["EducationDetailsComponent"],
            _components_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_20__["ContactMeComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/common-components/buttons/custom-buttons/custom-buttons.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/common-components/buttons/custom-buttons/custom-buttons.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  background-color: #378c3f;\n  color: #ffff;\n}\n\n.custom-button {\n  padding: 0px 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvYnV0dG9ucy9jdXN0b20tYnV0dG9ucy9EOlxcbXlzZWxmLWphc2Jpci9zcmNcXGFwcFxcY29tbW9uLWNvbXBvbmVudHNcXGJ1dHRvbnNcXGN1c3RvbS1idXR0b25zXFxjdXN0b20tYnV0dG9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvYnV0dG9ucy9jdXN0b20tYnV0dG9ucy9jdXN0b20tYnV0dG9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsNEJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1jb21wb25lbnRzL2J1dHRvbnMvY3VzdG9tLWJ1dHRvbnMvY3VzdG9tLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4YzNmO1xuICBjb2xvcjogI2ZmZmY7XG59XG4uY3VzdG9tLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDBweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG4iLCJidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4YzNmO1xuICBjb2xvcjogI2ZmZmY7XG59XG5cbi5jdXN0b20tYnV0dG9uIHtcbiAgcGFkZGluZzogMHB4IDE1cHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/common-components/buttons/custom-buttons/custom-buttons.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/common-components/buttons/custom-buttons/custom-buttons.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CustomButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomButtonsComponent", function() { return CustomButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomButtonsComponent = class CustomButtonsComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-buttons',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-buttons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/buttons/custom-buttons/custom-buttons.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-buttons.component.scss */ "./src/app/common-components/buttons/custom-buttons/custom-buttons.component.scss")).default]
    })
], CustomButtonsComponent);



/***/ }),

/***/ "./src/app/common-components/color-info-card/color-info-card.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/common-components/color-info-card/color-info-card.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".customInfo {\n  background-color: #378c3f;\n  min-height: 190px;\n  padding: 65px;\n  color: #fff;\n}\n\n.informations {\n  min-height: 190px;\n  padding-top: 30px;\n}\n\n.informations h5 {\n  display: flex;\n  font-weight: 300;\n  font-size: 24px;\n}\n\n.person-wrapper img {\n  max-height: 125px;\n  max-width: 125px;\n}\n\n.category {\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #9a9a9a;\n}\n\n.ref-img-wrapper p {\n  margin-bottom: 0;\n}\n\n.mat-card {\n  margin: 91px !important;\n}\n\n.experience {\n  line-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvY29sb3ItaW5mby1jYXJkL0Q6XFxteXNlbGYtamFzYmlyL3NyY1xcYXBwXFxjb21tb24tY29tcG9uZW50c1xcY29sb3ItaW5mby1jYXJkXFxjb2xvci1pbmZvLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi1jb21wb25lbnRzL2NvbG9yLWluZm8tY2FyZC9jb2xvci1pbmZvLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURERTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0U7RUFDRSxnQkFBQTtBQ0VKOztBRENBO0VBQ0UsdUJBQUE7QUNFRjs7QURBQTtFQUNFLGlCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9jb21tb24tY29tcG9uZW50cy9jb2xvci1pbmZvLWNhcmQvY29sb3ItaW5mby1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbUluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4YzNmO1xuICBtaW4taGVpZ2h0OiAxOTBweDtcbiAgcGFkZGluZzogNjVweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uaW5mb3JtYXRpb25zIHtcbiAgbWluLWhlaWdodDogMTkwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBoNSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuLnBlcnNvbi13cmFwcGVyIHtcbiAgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAxMjVweDtcbiAgICBtYXgtd2lkdGg6IDEyNXB4O1xuICB9XG59XG4uY2F0ZWdvcnkge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzlhOWE5YTtcbn1cbi5yZWYtaW1nLXdyYXBwZXIge1xuICBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG4ubWF0LWNhcmQge1xuICBtYXJnaW46IDkxcHggIWltcG9ydGFudDtcbn1cbi5leHBlcmllbmNlIHtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG4iLCIuY3VzdG9tSW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzhjM2Y7XG4gIG1pbi1oZWlnaHQ6IDE5MHB4O1xuICBwYWRkaW5nOiA2NXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmluZm9ybWF0aW9ucyB7XG4gIG1pbi1oZWlnaHQ6IDE5MHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5pbmZvcm1hdGlvbnMgaDUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5wZXJzb24td3JhcHBlciBpbWcge1xuICBtYXgtaGVpZ2h0OiAxMjVweDtcbiAgbWF4LXdpZHRoOiAxMjVweDtcbn1cblxuLmNhdGVnb3J5IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICM5YTlhOWE7XG59XG5cbi5yZWYtaW1nLXdyYXBwZXIgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5tYXQtY2FyZCB7XG4gIG1hcmdpbjogOTFweCAhaW1wb3J0YW50O1xufVxuXG4uZXhwZXJpZW5jZSB7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common-components/color-info-card/color-info-card.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/common-components/color-info-card/color-info-card.component.ts ***!
  \********************************************************************************/
/*! exports provided: ColorInfoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorInfoCardComponent", function() { return ColorInfoCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ColorInfoCardComponent = class ColorInfoCardComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColorInfoCardComponent.prototype, "institue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColorInfoCardComponent.prototype, "designationRole", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColorInfoCardComponent.prototype, "bgGreen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColorInfoCardComponent.prototype, "imagePath", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColorInfoCardComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColorInfoCardComponent.prototype, "role", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColorInfoCardComponent.prototype, "reference", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColorInfoCardComponent.prototype, "experienceSpan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColorInfoCardComponent.prototype, "companyName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColorInfoCardComponent.prototype, "experienceDetails", void 0);
ColorInfoCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-color-info-card",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./color-info-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/color-info-card/color-info-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./color-info-card.component.scss */ "./src/app/common-components/color-info-card/color-info-card.component.scss")).default]
    })
], ColorInfoCardComponent);



/***/ }),

/***/ "./src/app/common-components/custom-card/custom-card.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/common-components/custom-card/custom-card.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1jb21wb25lbnRzL2N1c3RvbS1jYXJkL2N1c3RvbS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/common-components/custom-card/custom-card.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/common-components/custom-card/custom-card.component.ts ***!
  \************************************************************************/
/*! exports provided: CustomCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCardComponent", function() { return CustomCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomCardComponent = class CustomCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/custom-card/custom-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-card.component.scss */ "./src/app/common-components/custom-card/custom-card.component.scss")).default]
    })
], CustomCardComponent);



/***/ }),

/***/ "./src/app/common-components/skills-meter/skills-meter/skills-meter.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/common-components/skills-meter/skills-meter/skills-meter.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .percent-complete {\n  max-width: 470px;\n} */\n.percent-complete p {\n  max-width: 400px;\n}\n.skills {\n  max-width: 400px;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0px;\n  color: #378c3f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvc2tpbGxzLW1ldGVyL3NraWxscy1tZXRlci9EOlxcbXlzZWxmLWphc2Jpci9zcmNcXGFwcFxcY29tbW9uLWNvbXBvbmVudHNcXHNraWxscy1tZXRlclxcc2tpbGxzLW1ldGVyXFxza2lsbHMtbWV0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi1jb21wb25lbnRzL3NraWxscy1tZXRlci9za2lsbHMtbWV0ZXIvc2tpbGxzLW1ldGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUFBO0FBS0U7RUFDRSxnQkFBQTtBQ0RKO0FESUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvc2tpbGxzLW1ldGVyL3NraWxscy1tZXRlci9za2lsbHMtbWV0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAucGVyY2VudC1jb21wbGV0ZSB7XG4gIG1heC13aWR0aDogNDcwcHg7XG59ICovXG5cbi5wZXJjZW50LWNvbXBsZXRlIHtcbiAgcCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgfVxufVxuLnNraWxscyB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGNvbG9yOiAjMzc4YzNmO1xufVxuIiwiLyogLnBlcmNlbnQtY29tcGxldGUge1xuICBtYXgtd2lkdGg6IDQ3MHB4O1xufSAqL1xuLnBlcmNlbnQtY29tcGxldGUgcCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5za2lsbHMge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBjb2xvcjogIzM3OGMzZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/common-components/skills-meter/skills-meter/skills-meter.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/common-components/skills-meter/skills-meter/skills-meter.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SkillsMeterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsMeterComponent", function() { return SkillsMeterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillsMeterComponent = class SkillsMeterComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SkillsMeterComponent.prototype, "skill", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SkillsMeterComponent.prototype, "skillPrecentage", void 0);
SkillsMeterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-skills-meter",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills-meter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/skills-meter/skills-meter/skills-meter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills-meter.component.scss */ "./src/app/common-components/skills-meter/skills-meter/skills-meter.component.scss")).default]
    })
], SkillsMeterComponent);



/***/ }),

/***/ "./src/app/common-components/social-links/social-links.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/common-components/social-links/social-links.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".conLogo {\n  /* position: relative; */\n  width: 40px;\n  height: 40px;\n  border-radius: 40px;\n  cursor: pointer;\n  background-color: #7eb53c99;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.conLogo .conIcon {\n  margin: 0;\n}\n.conLogoblank {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.conLogoblank .conIcon {\n  margin: 0;\n}\nimg {\n  max-height: 35px;\n  max-width: 35px;\n}\n/* .contact-us-wrapper {\n  padding-left: 15px;\n  p {\n    font-size: 11px;\n    max-width: 115px;\n  }\n  h4 {\n    font-size: 13px;\n    font-weight: 700;\n    margin-bottom: 0px;\n  }\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvc29jaWFsLWxpbmtzL0Q6XFxteXNlbGYtamFzYmlyL3NyY1xcYXBwXFxjb21tb24tY29tcG9uZW50c1xcc29jaWFsLWxpbmtzXFxzb2NpYWwtbGlua3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi1jb21wb25lbnRzL3NvY2lhbC1saW5rcy9zb2NpYWwtbGlua3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRjtBREFFO0VBQ0UsU0FBQTtBQ0VKO0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRUY7QURERTtFQUNFLFNBQUE7QUNHSjtBREFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDR0Y7QUREQTs7Ozs7Ozs7Ozs7R0FBQSIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1jb21wb25lbnRzL3NvY2lhbC1saW5rcy9zb2NpYWwtbGlua3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uTG9nbyB7XG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ViNTNjOTk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLmNvbkljb24ge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuLmNvbkxvZ29ibGFuayB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAuY29uSWNvbiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXB4O1xuICBtYXgtd2lkdGg6IDM1cHg7XG59XG4vKiAuY29udGFjdC11cy13cmFwcGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbWF4LXdpZHRoOiAxMTVweDtcbiAgfVxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59ICovXG4iLCIuY29uTG9nbyB7XG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ViNTNjOTk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb25Mb2dvIC5jb25JY29uIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29uTG9nb2JsYW5rIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29uTG9nb2JsYW5rIC5jb25JY29uIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXB4O1xuICBtYXgtd2lkdGg6IDM1cHg7XG59XG5cbi8qIC5jb250YWN0LXVzLXdyYXBwZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXgtd2lkdGg6IDExNXB4O1xuICB9XG4gIGg0IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/common-components/social-links/social-links.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/common-components/social-links/social-links.component.ts ***!
  \**************************************************************************/
/*! exports provided: SocialLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLinksComponent", function() { return SocialLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SocialLinksComponent = class SocialLinksComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SocialLinksComponent.prototype, "image", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SocialLinksComponent.prototype, "greycirclebg", void 0);
SocialLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-social-links",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social-links.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-components/social-links/social-links.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social-links.component.scss */ "./src/app/common-components/social-links/social-links.component.scss")).default]
    })
], SocialLinksComponent);



/***/ }),

/***/ "./src/app/components/about/about-me/about-me.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/about/about-me/about-me.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about-info {\n  padding: 30px;\n}\n.about-info p {\n  line-height: 29px;\n  padding-top: 21px;\n}\n.details {\n  padding: 30px;\n}\np {\n  font-size: 14px;\n}\n.social-links {\n  position: absolute;\n  top: 0px;\n}\napp-social-links {\n  padding: 20px;\n}\n.about-social-wrap {\n  padding-top: 25px;\n  position: absolute;\n  bottom: 10px;\n  right: 396px;\n  z-index: 100;\n}\n.about-me-wrap {\n  padding: 50px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC1tZS9EOlxcbXlzZWxmLWphc2Jpci9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWJvdXRcXGFib3V0LW1lXFxhYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBREFFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEQ0E7RUFDRSxhQUFBO0FDRUY7QURBQTtFQUNFLGVBQUE7QUNHRjtBRERBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDSUY7QURGQTtFQUNFLGFBQUE7QUNLRjtBREhBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ01GO0FESkE7RUFDRSxpQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1pbmZvIHtcbiAgcGFkZGluZzogMzBweDtcbiAgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgcGFkZGluZy10b3A6IDIxcHg7XG4gIH1cbn1cbi5kZXRhaWxzIHtcbiAgcGFkZGluZzogMzBweDtcbn1cbnAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc29jaWFsLWxpbmtzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbn1cbmFwcC1zb2NpYWwtbGlua3Mge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmFib3V0LXNvY2lhbC13cmFwIHtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMzk2cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5hYm91dC1tZS13cmFwIHtcbiAgcGFkZGluZzogNTBweCAwcHg7XG59XG4iLCIuYWJvdXQtaW5mbyB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4uYWJvdXQtaW5mbyBwIHtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gIHBhZGRpbmctdG9wOiAyMXB4O1xufVxuXG4uZGV0YWlscyB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zb2NpYWwtbGlua3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xufVxuXG5hcHAtc29jaWFsLWxpbmtzIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmFib3V0LXNvY2lhbC13cmFwIHtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMzk2cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmFib3V0LW1lLXdyYXAge1xuICBwYWRkaW5nOiA1MHB4IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/about/about-me/about-me.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/about/about-me/about-me.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutMeComponent = class AboutMeComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-me',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about-me/about-me.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-me.component.scss */ "./src/app/components/about/about-me/about-me.component.scss")).default]
    })
], AboutMeComponent);



/***/ }),

/***/ "./src/app/components/contact-me/contact-me.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/contact-me/contact-me.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cc-contact-information {\n  background-image: url('mylocation.png');\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n}\n.cc-contact-information .cc-contact {\n  padding: 8% 0 8% 20%;\n}\n.cc-contact-information .contact-me-wrap {\n  padding: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LW1lL0Q6XFxteXNlbGYtamFzYmlyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0LW1lXFxjb250YWN0LW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QtbWUvY29udGFjdC1tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQUU7RUFDRSxvQkFBQTtBQ0VKO0FEQUU7RUFDRSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QtbWUvY29udGFjdC1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYy1jb250YWN0LWluZm9ybWF0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL215bG9jYXRpb24ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAuY2MtY29udGFjdCB7XG4gICAgcGFkZGluZzogOCUgMCA4JSAyMCU7XG4gIH1cbiAgLmNvbnRhY3QtbWUtd3JhcCB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgfVxufVxuIiwiLmNjLWNvbnRhY3QtaW5mb3JtYXRpb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbXlsb2NhdGlvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2MtY29udGFjdC1pbmZvcm1hdGlvbiAuY2MtY29udGFjdCB7XG4gIHBhZGRpbmc6IDglIDAgOCUgMjAlO1xufVxuLmNjLWNvbnRhY3QtaW5mb3JtYXRpb24gLmNvbnRhY3QtbWUtd3JhcCB7XG4gIHBhZGRpbmc6IDI1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/contact-me/contact-me.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/contact-me/contact-me.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMeComponent", function() { return ContactMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactMeComponent = class ContactMeComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-me',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-me/contact-me.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-me.component.scss */ "./src/app/components/contact-me/contact-me.component.scss")).default]
    })
], ContactMeComponent);



/***/ }),

/***/ "./src/app/components/education-details/education-details.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/education-details/education-details.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".education-wrap {\n  padding: 40px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24tZGV0YWlscy9EOlxcbXlzZWxmLWphc2Jpci9zcmNcXGFwcFxcY29tcG9uZW50c1xcZWR1Y2F0aW9uLWRldGFpbHNcXGVkdWNhdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2VkdWNhdGlvbi1kZXRhaWxzL2VkdWNhdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uLWRldGFpbHMvZWR1Y2F0aW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWR1Y2F0aW9uLXdyYXAge1xuICBwYWRkaW5nOiA0MHB4IDBweDtcbn1cbiIsIi5lZHVjYXRpb24td3JhcCB7XG4gIHBhZGRpbmc6IDQwcHggMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/education-details/education-details.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/education-details/education-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EducationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationDetailsComponent", function() { return EducationDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EducationDetailsComponent = class EducationDetailsComponent {
    constructor() {
        this.educationInfo = [
            {
                id: 1,
                name: "Jasbir",
                educationSpan: "2014 - 2018",
                institute: "Guru Nanak Institute of Technology",
                degree: "Bachelors Degree",
                degreeName: "Bachelor of Technology",
                educationDetails: "I completed my Bachelor of Technology in Computer Science and Engineering from M.A.K.A.U.T(WBUT) in Guru Nanak Institute of Technology in 2018, securing 78.7% Score.",
            },
            {
                id: 2,
                name: "Jasbir",
                educationSpan: "2014",
                institute: "Little Star High School",
                degree: "ISC",
                degreeName: "COUNCIL FOR THE INDIAN SCHOOL CERTIFICATE EXAMINATIONS",
                educationDetails: "I have completed my Higher Secondary in 2014 from COUNCIL FOR THE INDIAN SCHOOL CERTIFICATE EXAMINATIONS in Little Star High School securing 70.25% Score",
            },
            {
                id: 3,
                name: "Jasbir",
                educationSpan: "2012",
                institute: "Little Star High School",
                degree: "ICSE",
                degreeName: "Indian Certificate of Secondary Education",
                educationDetails: "I have completed my Secondary examination in 2012 from Indian Certificate of Secondary Education in Little Star High School securing 66.75% Score",
            },
        ];
    }
    ngOnInit() { }
};
EducationDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-education-details",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education-details/education-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education-details.component.scss */ "./src/app/components/education-details/education-details.component.scss")).default]
    })
], EducationDetailsComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  padding: 24px 0;\n}\n\napp-social-links {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRDpcXG15c2VsZi1qYXNiaXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgcGFkZGluZzogMjRweCAwO1xufVxuYXBwLXNvY2lhbC1saW5rcyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iLCIuZm9vdGVyIHtcbiAgcGFkZGluZzogMjRweCAwO1xufVxuXG5hcHAtc29jaWFsLWxpbmtzIHtcbiAgcGFkZGluZzogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/header/header/header.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-transparent {\n  background-color: transparent !important;\n  box-shadow: none;\n  color: #ffffff;\n  padding-top: 20px;\n}\n\n.profile-pic {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  padding: 0 15px;\n  color: #ffffff;\n  width: 100%;\n  max-width: 880px;\n}\n\n.cc-profile-image a {\n  position: relative;\n}\n\n.cc-profile-image a:before {\n  content: \"\";\n  border: 15px solid rgba(55, 140, 63, 0.6);\n  border-radius: 50%;\n  height: 180px;\n  width: 180px;\n  position: absolute;\n  left: 0;\n  -webkit-animation: pulsate 1.6s ease-out !important;\n  animation: pulsate 1.6s ease-out !important;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  opacity: 0;\n  z-index: 99;\n}\n\n.cc-profile-image img {\n  position: relative;\n  border-radius: 50%;\n  height: 180px;\n  width: 180px;\n  padding: 0;\n  margin: 0;\n  border: 15px solid transparent;\n  z-index: 9999;\n  transition: all 0.3s ease-out;\n}\n\n.cc-profile-image a:hover img {\n  transform: scale(1.06, 1.06);\n}\n\n.cc-profile-image a:hover:before {\n  -webkit-animation: none;\n  animation: none;\n}\n\n/* .profile-page {\n  background-image: url(../../../../assets/cc-bg-1.jpg);\n  height: 100%;\n} */\n\n.page-header {\n  height: 100vh;\n  max-height: 1050px;\n  padding: 0;\n  color: #ffffff;\n  position: relative;\n  background-position: center center;\n  background-size: cover;\n}\n\n.page-header .page-header-image {\n  position: absolute;\n  background-size: cover;\n  background-position: center center;\n  width: 100%;\n  height: 100%;\n  background-image: url('DSC_1017.jpg');\n  z-index: -1;\n}\n\n.page-header footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n.page-header .container {\n  height: 100%;\n  z-index: 1;\n  text-align: center;\n  position: relative;\n}\n\n.page-header .container > .content-center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  padding: 0 15px;\n  color: #ffffff;\n  width: 100%;\n  max-width: 880px;\n}\n\n.page-header .category,\n.page-header .description {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.page-header.page-header-small {\n  height: 60vh;\n  max-height: 440px;\n}\n\n.page-header:after,\n.page-header:before {\n  position: absolute;\n  z-index: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  left: 0;\n  top: 0;\n  content: \"\";\n}\n\n.page-header {\n  /* For browsers that do not support gradients */\n  /* For Safari 5.1 to 6.0 */\n  /* For Opera 11.1 to 12.0 */\n  /* For Firefox 3.6 to 15 */\n  /* Standard syntax */\n}\n\n.level {\n  width: 100%;\n  height: 71px;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);\n  background: transparent;\n  display: flex;\n  position: fixed;\n  top: 0;\n  z-index: 1000;\n  transition: 0.8s all ease;\n}\n\n.level-trans {\n  background: #378c3f;\n}\n\n.myname {\n  font-weight: 600;\n}\n\n.designation {\n  font-weight: 700;\n}\n\n.hire-me {\n  padding: 0px 15px;\n}\n\n.hire-me button {\n  padding: 0px 36px !important;\n}\n\n.download-cv {\n  padding: 0px 15px;\n}\n\n.download-cv button {\n  padding: 0px 25px !important;\n}\n\nbutton {\n  background-color: #378c3f;\n  color: #ffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyL0Q6XFxteXNlbGYtamFzYmlyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRGdDQTtFQUNFLGtCQUFBO0FDN0JGOztBRGdDQTtFQUNFLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxtREFBQTtFQUNBLDJDQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDN0JGOztBRGdDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBRUEsNkJBQUE7QUM3QkY7O0FEZ0NBO0VBRUUsNEJBQUE7QUM3QkY7O0FEZ0NBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0FDN0JGOztBRCtCQTs7O0dBQUE7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtBQzVCRjs7QUQrQkE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtBQzVCRjs7QUQrQkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDNUJGOztBRCtCQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQzVCRjs7QUQrQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDNUJGOztBRCtCQTs7RUFFRSwrQkFBQTtBQzVCRjs7QUQrQkE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUM1QkY7O0FEK0JBOztFQUVFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQzVCRjs7QURpQ0E7RUFFRSwrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQWFBLG9CQUFBO0FDM0NGOztBRDZDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQzFDRjs7QUQ0Q0E7RUFDRSxtQkFBQTtBQ3pDRjs7QUQyQ0E7RUFDRSxnQkFBQTtBQ3hDRjs7QUQwQ0E7RUFDRSxnQkFBQTtBQ3ZDRjs7QUR5Q0E7RUFDRSxpQkFBQTtBQ3RDRjs7QUR1Q0U7RUFDRSw0QkFBQTtBQ3JDSjs7QUR3Q0E7RUFDRSxpQkFBQTtBQ3JDRjs7QURzQ0U7RUFDRSw0QkFBQTtBQ3BDSjs7QUR1Q0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNwQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnByb2ZpbGUtcGljIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4ODBweDtcbn1cbi8vIC5jYy1wcm9maWxlLWltYWdlIHtcbi8vICAgYSB7XG4vLyAgICAgY29sb3I6ICMzNzhjM2YgIWltcG9ydGFudDtcbi8vICAgICAmOmJlZm9yZSB7XG4vLyAgICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgICAgYm9yZGVyOiAxNXB4IHNvbGlkIHJnYmEoNTUsIDE0MCwgNjMsIDAuNik7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgICAgICBoZWlnaHQ6IDE4MHB4O1xuLy8gICAgICAgd2lkdGg6IDE4MHB4O1xuLy8gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgbGVmdDogMDtcbi8vICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzYXRlIDEuNnMgZWFzZS1vdXQgIWltcG9ydGFudDtcbi8vICAgICAgIGFuaW1hdGlvbjogcHVsc2F0ZSAxLjZzIGVhc2Utb3V0ICFpbXBvcnRhbnQ7XG4vLyAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlICFpbXBvcnRhbnQ7XG4vLyAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZSAhaW1wb3J0YW50O1xuLy8gICAgICAgb3BhY2l0eTogMDtcbi8vICAgICAgIHotaW5kZXg6IDk5O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICBpbWcge1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgICAgaGVpZ2h0OiAxODBweDtcbi8vICAgICB3aWR0aDogMTgwcHg7XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBtYXJnaW46IDA7XG4vLyAgICAgYm9yZGVyOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuLy8gICAgIHotaW5kZXg6IDk5OTk7XG4vLyAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbi8vICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbi8vICAgfVxuLy8gfVxuLmNjLXByb2ZpbGUtaW1hZ2UgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNjLXByb2ZpbGUtaW1hZ2UgYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IDE1cHggc29saWQgcmdiYSg1NSwgMTQwLCA2MywgMC42KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogMTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNhdGUgMS42cyBlYXNlLW91dCAhaW1wb3J0YW50O1xuICBhbmltYXRpb246IHB1bHNhdGUgMS42cyBlYXNlLW91dCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5jYy1wcm9maWxlLWltYWdlIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogMTgwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiA5OTk5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbn1cblxuLmNjLXByb2ZpbGUtaW1hZ2UgYTpob3ZlciBpbWcge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNiwgMS4wNik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNiwgMS4wNik7XG59XG5cbi5jYy1wcm9maWxlLWltYWdlIGE6aG92ZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XG4gIGFuaW1hdGlvbjogbm9uZTtcbn1cbi8qIC5wcm9maWxlLXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2NjLWJnLTEuanBnKTtcbiAgaGVpZ2h0OiAxMDAlO1xufSAqL1xuLnBhZ2UtaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogMTA1MHB4O1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucGFnZS1oZWFkZXIgLnBhZ2UtaGVhZGVyLWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvRFNDXzEwMTcuanBnXCIpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnBhZ2UtaGVhZGVyIGZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhZ2UtaGVhZGVyIC5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGFnZS1oZWFkZXIgLmNvbnRhaW5lciA+IC5jb250ZW50LWNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogODgwcHg7XG59XG5cbi5wYWdlLWhlYWRlciAuY2F0ZWdvcnksXG4ucGFnZS1oZWFkZXIgLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLnBhZ2UtaGVhZGVyLnBhZ2UtaGVhZGVyLXNtYWxsIHtcbiAgaGVpZ2h0OiA2MHZoO1xuICBtYXgtaGVpZ2h0OiA0NDBweDtcbn1cblxuLnBhZ2UtaGVhZGVyOmFmdGVyLFxuLnBhZ2UtaGVhZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgY29udGVudDogXCJcIjtcbn1cbi5wYWdlLWhlYWRlcjpiZWZvcmUge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ucGFnZS1oZWFkZXIge1xuICAvLyBiYWNrZ3JvdW5kOiByZ2JhKDQ0LCA0NCwgNDQsIDAuMik7XG4gIC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICAvKiBGb3IgU2FmYXJpIDUuMSB0byA2LjAgKi9cbiAgLyogRm9yIE9wZXJhIDExLjEgdG8gMTIuMCAqL1xuICAvKiBGb3IgRmlyZWZveCAzLjYgdG8gMTUgKi9cbiAgLy8gYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChcbiAgLy8gICBsaW5lYXIsXG4gIC8vICAgbGVmdCBib3R0b20sXG4gIC8vICAgbGVmdCB0b3AsXG4gIC8vICAgZnJvbShyZ2JhKDQ0LCA0NCwgNDQsIDAuMikpLFxuICAvLyAgIHRvKHJnYmEoNTUsIDE0MCwgNjMsIDAuNikpXG4gIC8vICk7XG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgLy8gICAwZGVnLFxuICAvLyAgIHJnYmEoNDQsIDQ0LCA0NCwgMC4yKSxcbiAgLy8gICByZ2JhKDU1LCAxNDAsIDYzLCAwLjYpXG4gIC8vICk7XG4gIC8qIFN0YW5kYXJkIHN5bnRheCAqL1xufVxuLmxldmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzFweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICB0cmFuc2l0aW9uOiAwLjhzIGFsbCBlYXNlO1xufVxuLmxldmVsLXRyYW5zIHtcbiAgYmFja2dyb3VuZDogIzM3OGMzZjtcbn1cbi5teW5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRlc2lnbmF0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5oaXJlLW1lIHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMHB4IDM2cHggIWltcG9ydGFudDtcbiAgfVxufVxuLmRvd25sb2FkLWN2IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMHB4IDI1cHggIWltcG9ydGFudDtcbiAgfVxufVxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3OGMzZjtcbiAgY29sb3I6ICNmZmZmO1xufVxuIiwiLm5hdmJhci10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ucHJvZmlsZS1waWMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDg4MHB4O1xufVxuXG4uY2MtcHJvZmlsZS1pbWFnZSBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2MtcHJvZmlsZS1pbWFnZSBhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlcjogMTVweCBzb2xpZCByZ2JhKDU1LCAxNDAsIDYzLCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcHVsc2F0ZSAxLjZzIGVhc2Utb3V0ICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogcHVsc2F0ZSAxLjZzIGVhc2Utb3V0ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmNjLXByb2ZpbGUtaW1hZ2UgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xufVxuXG4uY2MtcHJvZmlsZS1pbWFnZSBhOmhvdmVyIGltZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA2LCAxLjA2KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2LCAxLjA2KTtcbn1cblxuLmNjLXByb2ZpbGUtaW1hZ2UgYTpob3ZlcjpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcbiAgYW5pbWF0aW9uOiBub25lO1xufVxuXG4vKiAucHJvZmlsZS1wYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9jYy1iZy0xLmpwZyk7XG4gIGhlaWdodDogMTAwJTtcbn0gKi9cbi5wYWdlLWhlYWRlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1heC1oZWlnaHQ6IDEwNTBweDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnBhZ2UtaGVhZGVyIC5wYWdlLWhlYWRlci1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL0RTQ18xMDE3LmpwZ1wiKTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5wYWdlLWhlYWRlciBmb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYWdlLWhlYWRlciAuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBhZ2UtaGVhZGVyIC5jb250YWluZXIgPiAuY29udGVudC1jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDg4MHB4O1xufVxuXG4ucGFnZS1oZWFkZXIgLmNhdGVnb3J5LFxuLnBhZ2UtaGVhZGVyIC5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5wYWdlLWhlYWRlci5wYWdlLWhlYWRlci1zbWFsbCB7XG4gIGhlaWdodDogNjB2aDtcbiAgbWF4LWhlaWdodDogNDQwcHg7XG59XG5cbi5wYWdlLWhlYWRlcjphZnRlcixcbi5wYWdlLWhlYWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICAvKiBGb3IgU2FmYXJpIDUuMSB0byA2LjAgKi9cbiAgLyogRm9yIE9wZXJhIDExLjEgdG8gMTIuMCAqL1xuICAvKiBGb3IgRmlyZWZveCAzLjYgdG8gMTUgKi9cbiAgLyogU3RhbmRhcmQgc3ludGF4ICovXG59XG5cbi5sZXZlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcxcHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgdHJhbnNpdGlvbjogMC44cyBhbGwgZWFzZTtcbn1cblxuLmxldmVsLXRyYW5zIHtcbiAgYmFja2dyb3VuZDogIzM3OGMzZjtcbn1cblxuLm15bmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kZXNpZ25hdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5oaXJlLW1lIHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG4uaGlyZS1tZSBidXR0b24ge1xuICBwYWRkaW5nOiAwcHggMzZweCAhaW1wb3J0YW50O1xufVxuXG4uZG93bmxvYWQtY3Yge1xuICBwYWRkaW5nOiAwcHggMTVweDtcbn1cbi5kb3dubG9hZC1jdiBidXR0b24ge1xuICBwYWRkaW5nOiAwcHggMjVweCAhaW1wb3J0YW50O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4YzNmO1xuICBjb2xvcjogI2ZmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/header/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/header/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let HeaderComponent = class HeaderComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.headerValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checking = "Ram";
        this.scroll = false;
        this.scrolling = (s) => {
            let sc = s.target.scrollingElement.scrollTop;
            if (sc >= 400) {
                this.scroll = true;
            }
            else {
                this.scroll = false;
            }
        };
        this.loadingTest = () => {
            console.log(this.textValue);
            this.textValue = this.textValue + 1;
            this.valueChange.emit(this.textValue);
            // tslint:disable-next-line:semicolon
        };
    }
    ngOnInit() {
        window.addEventListener("scroll", this.scrolling, true);
    }
    sectionTravel(val) {
        //  window.scrollBy(100, 100);
        //console.log("about")
        console.log({ val });
        this.headerValue.emit(val);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderComponent.prototype, "valueChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderComponent.prototype, "headerValue", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-header",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header/header.component.scss")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"])
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let HomeComponent = class HomeComponent {
    constructor(vps) {
        this.vps = vps;
    }
    ngOnInit() {
    }
    sectionRender(e) {
        console.log({ e });
        // window.document.getElementById("workexperience").scrollIntoView();
        this.vps.scrollToAnchor(e);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/professional-skills/professional-skills.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/professional-skills/professional-skills.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prof-skill-wrap {\n  padding: 40px 0px;\n}\n.prof-skill-wrap h4 {\n  padding-bottom: 45px;\n}\n.skill-comm-padd {\n  padding-left: 52px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzaW9uYWwtc2tpbGxzL0Q6XFxteXNlbGYtamFzYmlyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9mZXNzaW9uYWwtc2tpbGxzXFxwcm9mZXNzaW9uYWwtc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Npb25hbC1za2lsbHMvcHJvZmVzc2lvbmFsLXNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7QURBRTtFQUNFLG9CQUFBO0FDRUo7QURDQTtFQUNFLGtCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2Zlc3Npb25hbC1za2lsbHMvcHJvZmVzc2lvbmFsLXNraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9mLXNraWxsLXdyYXAge1xuICBwYWRkaW5nOiA0MHB4IDBweDtcbiAgaDQge1xuICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xuICB9XG59XG4uc2tpbGwtY29tbS1wYWRkIHtcbiAgcGFkZGluZy1sZWZ0OiA1MnB4O1xufVxuIiwiLnByb2Ytc2tpbGwtd3JhcCB7XG4gIHBhZGRpbmc6IDQwcHggMHB4O1xufVxuLnByb2Ytc2tpbGwtd3JhcCBoNCB7XG4gIHBhZGRpbmctYm90dG9tOiA0NXB4O1xufVxuXG4uc2tpbGwtY29tbS1wYWRkIHtcbiAgcGFkZGluZy1sZWZ0OiA1MnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/professional-skills/professional-skills.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/professional-skills/professional-skills.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProfessionalSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalSkillsComponent", function() { return ProfessionalSkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfessionalSkillsComponent = class ProfessionalSkillsComponent {
    constructor() {
        this.skillHtml = "HTML";
        this.skillHtmlPrecentage = "80";
        this.skillCSS = "CSS";
        this.skillCSSPrecentage = "80";
        this.skillBootstrap4 = "CSS";
        this.skillBootstrap4Precentage = "80";
        this.skillJS = "JAVASCRIPT";
        this.skillJSPrecentage = "75";
        this.skillTypescript = "TYPESCRIPT";
        this.skillTypescriptPrecentage = "75";
        this.skillAngular = "ANGULAR";
        this.skillAngularPrecentage = "80";
        this.skillAngularJS = "ANGULAR JS";
        this.skillAngularJSPrecentage = "50";
        this.skillSASS = "SASS";
        this.skillSASSPrecentage = "80";
    }
    ngOnInit() { }
};
ProfessionalSkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-professional-skills",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./professional-skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professional-skills/professional-skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./professional-skills.component.scss */ "./src/app/components/professional-skills/professional-skills.component.scss")).default]
    })
], ProfessionalSkillsComponent);



/***/ }),

/***/ "./src/app/components/references/references.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/references/references.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".customSlides {\n  min-height: 280px;\n}\n\n.customCaraosal:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.customCaraosal .carousel-indicators {\n  bottom: 38px;\n  left: 11px;\n}\n\n.customCaraosal .carousel-indicators li {\n  background-color: #378c3f !important;\n}\n\n.customCaraosal .carousel-inner:focus {\n  box-shadow: none;\n  outline: none;\n}\n\n.customCaraosal .carousel-item:focus {\n  box-shadow: none;\n  outline: none;\n}\n\n.customCaraosal .carousel-item .active:focus {\n  box-shadow: none;\n  outline: none;\n}\n\napp-color-info-card .mat-card {\n  margin: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWZlcmVuY2VzL0Q6XFxteXNlbGYtamFzYmlyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZWZlcmVuY2VzXFxyZWZlcmVuY2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlZmVyZW5jZXMvcmVmZXJlbmNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0U7RUFDRSxvQ0FBQTtBQ0NKOztBREVJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDQU47O0FESUk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNGTjs7QURNSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0pOOztBRFNFO0VBQ0UsdUJBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVmZXJlbmNlcy9yZWZlcmVuY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbVNsaWRlcyB7XG4gIG1pbi1oZWlnaHQ6IDI4MHB4O1xufVxuLmN1c3RvbUNhcmFvc2FsIHtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICBib3R0b206IDM4cHg7XG4gICAgbGVmdDogMTFweDtcbiAgfVxuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3OGMzZiAhaW1wb3J0YW50O1xuICB9XG4gIC5jYXJvdXNlbC1pbm5lciB7XG4gICAgJjpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cbiAgLmNhcm91c2VsLWl0ZW0ge1xuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICB9XG4gIC5jYXJvdXNlbC1pdGVtIC5hY3RpdmUge1xuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICB9XG59XG5hcHAtY29sb3ItaW5mby1jYXJkIHtcbiAgLm1hdC1jYXJkIHtcbiAgICBtYXJnaW46IDUwcHggIWltcG9ydGFudDtcbiAgfVxufVxuIiwiLmN1c3RvbVNsaWRlcyB7XG4gIG1pbi1oZWlnaHQ6IDI4MHB4O1xufVxuXG4uY3VzdG9tQ2FyYW9zYWw6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmN1c3RvbUNhcmFvc2FsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgYm90dG9tOiAzOHB4O1xuICBsZWZ0OiAxMXB4O1xufVxuLmN1c3RvbUNhcmFvc2FsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3OGMzZiAhaW1wb3J0YW50O1xufVxuLmN1c3RvbUNhcmFvc2FsIC5jYXJvdXNlbC1pbm5lcjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uY3VzdG9tQ2FyYW9zYWwgLmNhcm91c2VsLWl0ZW06Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmN1c3RvbUNhcmFvc2FsIC5jYXJvdXNlbC1pdGVtIC5hY3RpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5hcHAtY29sb3ItaW5mby1jYXJkIC5tYXQtY2FyZCB7XG4gIG1hcmdpbjogNTBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/references/references.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/references/references.component.ts ***!
  \***************************************************************/
/*! exports provided: ReferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferencesComponent", function() { return ReferencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let ReferencesComponent = class ReferencesComponent {
    constructor(config) {
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.references = [
            {
                id: 1,
                name: "Aiyana",
                role: "CEO / WEBM",
                imagePath: "assets/reference-image-1.jpg",
                ref: "Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.",
            },
            {
                id: 2,
                name: "Braiden",
                role: "CEO / CREATIVEM",
                imagePath: "assets/reference-image-2.jpg",
                ref: "Braiden Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.",
            },
            {
                id: 3,
                name: "Alexander",
                role: "CEO / WEBNOTE",
                imagePath: "assets/reference-image-3.jpg",
                ref: "Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.",
            },
        ];
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
};
ReferencesComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] }
];
ReferencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-references",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./references.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/references/references.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./references.component.scss */ "./src/app/components/references/references.component.scss")).default]
    })
], ReferencesComponent);



/***/ }),

/***/ "./src/app/components/work-experience/work-experience.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/work-experience/work-experience.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".work-exp-wrap {\n  padding: 50px 0px;\n}\n.work-exp-wrap h3 {\n  padding-bottom: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3JrLWV4cGVyaWVuY2UvRDpcXG15c2VsZi1qYXNiaXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHdvcmstZXhwZXJpZW5jZVxcd29yay1leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3dvcmstZXhwZXJpZW5jZS93b3JrLWV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGO0FEQUU7RUFDRSxvQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93b3JrLWV4cGVyaWVuY2Uvd29yay1leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmstZXhwLXdyYXAge1xuICBwYWRkaW5nOiA1MHB4IDBweDtcbiAgaDMge1xuICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xuICB9XG59XG4iLCIud29yay1leHAtd3JhcCB7XG4gIHBhZGRpbmc6IDUwcHggMHB4O1xufVxuLndvcmstZXhwLXdyYXAgaDMge1xuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/work-experience/work-experience.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/work-experience/work-experience.component.ts ***!
  \*************************************************************************/
/*! exports provided: WorkExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExperienceComponent", function() { return WorkExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkExperienceComponent = class WorkExperienceComponent {
    constructor() {
        this.experienceSpan = "MARCH 2016 - PRESENT";
        this.companyName = "CREATIVEM";
        this.employeeInfo = [
            {
                id: 1,
                name: "Jasbir",
                experienceSpan: "Aug 2018 - Dec 2018",
                companyName: "Optimize IT Systems",
                experienceDetails: "This job involved website development and design using different technologies, where i was given training on different front-end technologies that inluded HTML5, CSS, Javascript, ES6, and JS frameworks. ",
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
                experienceDetails: "This job involves website & apps developments and design using different technologies such as Javascript, Angular 8, React Native, HTML, CSS, Bootstrap 4+, LESS, SASS, Material UI Framworks, NG-Bootstrap and many more. This job also involves Live Client support for existing projects for enhancements in different technologies.",
                designation: "Software Developer",
                institute: "Guru Nanak Institute of Technology",
                degree: "Bachelors Degree",
                degreeName: "Bachelor of Technology",
            },
        ];
    }
    ngOnInit() { }
};
WorkExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-work-experience",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/work-experience/work-experience.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-experience.component.scss */ "./src/app/components/work-experience/work-experience.component.scss")).default]
    })
], WorkExperienceComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");







const modules = [
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: modules,
        exports: modules,
    })
], MaterialModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\myself-jasbir\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map