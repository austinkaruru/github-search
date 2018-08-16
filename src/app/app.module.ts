import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { GithubFormComponent } from "./github-form/github-form.component";
import { GithubComponent } from "./github/github.component";
import { AboutComponent } from "./about/about.component";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [{ path: "about", component: AboutComponent }];

@NgModule({
  declarations: [
    AppComponent,
    GithubFormComponent,
    GithubComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
