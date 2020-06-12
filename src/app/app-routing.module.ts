import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header/header.component";
import { SocialLinksComponent } from "./common-components/social-links/social-links.component";

const routes: Routes = [
  // { path: "header", component: HeaderComponent },
  // { path: "social", component: SocialLinksComponent },
  /* {path:'**', component:pagenotfound} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [HeaderComponent, SocialLinksComponent];
