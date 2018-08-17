import { Injectable } from "@angular/core";
import { Github } from "../github";

@Injectable({
  providedIn: "root"
})
export class RepoService {
  getGithub() {
    return Github;
  }

  constructor() {}
}
