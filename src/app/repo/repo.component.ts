import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Repo } from "../repo";

@Component({
  selector: "app-repo",
  templateUrl: "./repo.component.html",
  styleUrls: ["./repo.component.css"]
})
export class RepoComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get("https://api.github.com/users/austinkaruru/repos")
      .subscribe(data => {});
  }
}
