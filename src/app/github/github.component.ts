import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Github } from "../github-class/github";

@Component({
  selector: "app-github",
  templateUrl: "./github.component.html",
  styleUrls: ["./github.component.css"]
})
export class GithubComponent implements OnInit {
  title = "Github Search";

  github: Github;
  githubs = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    interface ApiResponse {
      login: string;
      avatar_url: string;
      repos_url: string;
    }
    this.http
      .get<ApiResponse>(
        "https://api.github.com/users/austinkaruru?api_key=07b371a160a752a3d16958a304f48cc07398f603"
      )
      .subscribe(data => {
        console.log(data);
        for (let i = 0; i < data.data.length; i++) {
          this.githubs.push(data.data[i]);
        }
        // this.github = new Github(data.login, data.avatar_url, data.repos_url);
      });
  }
}