import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { GithubFormComponent } from "./github-form/github-form.component";
import { GithubComponent } from "./github/github.component";
import { AboutComponent } from "./about/about.component";
import { HttpClientModule } from "@angular/common/http";
import { NgProgressModule } from "@ngx-progressbar/core";
import { NgProgressHttpModule } from "@ngx-progressbar/http";
import { RepoComponent } from "./repo/repo.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "**", component: NotFoundComponent },
  { path: "repos_url", component: GithubComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GithubFormComponent,
    GithubComponent,
    AboutComponent,
    RepoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgProgressModule.forRoot(),
    NgProgressHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
