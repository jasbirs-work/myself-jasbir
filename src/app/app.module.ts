import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { MaterialModule } from "./material.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header/header.component";
/* import { SocialIconDirective } from "./social-icon.directive";
import { SocialLinksComponent } from "./common-components/social-links/social-links.component"; */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { CustomButtonsComponent } from "./common-components/buttons/custom-buttons/custom-buttons.component";
import { AboutMeComponent } from "./components/about/about-me/about-me.component";
import { SkillsMeterComponent } from "./common-components/skills-meter/skills-meter/skills-meter.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CustomCardComponent } from './common-components/custom-card/custom-card.component';
import { ProfessionalSkillsComponent } from './components/professional-skills/professional-skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ColorInfoCardComponent } from './common-components/color-info-card/color-info-card.component';
import { ReferencesComponent } from './components/references/references.component';
import { EducationDetailsComponent } from './components/education-details/education-details.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    /* SocialIconDirective,
    SocialLinksComponent, */
    routingComponents,
    CustomButtonsComponent,
    AboutMeComponent,
    SkillsMeterComponent,
    CustomCardComponent,
    ProfessionalSkillsComponent,
    WorkExperienceComponent,
    ColorInfoCardComponent,
    ReferencesComponent,
    EducationDetailsComponent,
    ContactMeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
