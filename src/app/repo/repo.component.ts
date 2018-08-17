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
    interface ApiResponse {
      id: number;
      name: string;
    }
    this.http
      .get<ApiResponse>("https://api.github.com/users/austinkaruru/repos")
      .subscribe(data => {
        this.repo = new Repo(data.id, data.name);
      });
  }
}
