import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Github } from "../github-class/github";
// import { GithubService } from "../github/github.service";

@Component({
  selector: "app-github",
  templateUrl: "./github.component.html",
  // providers: [GithubService],
  styleUrls: ["./github.component.css"]
})
export class GithubComponent implements OnInit {
  title = "Search";

  github: Github;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    interface ApiResponse {
      login: string;
      avatar_url: any;
      public_repos: any;
      followers: string;
      following: string;
      repos_url: string;
    }
    this.http
      .get<ApiResponse>(
        "https://api.github.com/users/austinkaruru?api_key=8eac2bdfaad9ae260bd8289a09f39a8cafc4ae6e"
      )
      .subscribe(data => {
        // console.log(data);
        // for (let i = 0; i < data.data.length; i++) {
        //   this.github.push(data[i]);
        // }
        this.github = new Github(
          data.login,
          data.avatar_url,
          data.followers,
          data.following,
          data.repos_url
        );
      });
  }
}
