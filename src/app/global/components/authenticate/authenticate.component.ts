import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { AlertInterface } from "../alert/alert.component";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-authenticate",
  templateUrl: "./authenticate.component.html",
  styleUrls: ["./authenticate.component.less"]
})
export class AuthenticateComponent implements OnInit {
  title: string;
  loginForm: FormGroup;

  public showLoginAlert = false;
  public loginError: AlertInterface;
  public lastMethodUsed: string;
  public loadingLogin: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public afAuth: AngularFireAuth
  ) {}

  loginByUsername() {
    console.log(this.loginForm);
    this.router.navigate(["/admin"]);
  }

  loginWithService(service: string) {
    this.loadingLogin = true;
    console.log(this.afAuth);
    if (service === "google") {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
        loggedIn => {
          this.showLoginAlert = false;

          this.loadingLogin = false;
          console.log("LOGGED IN", loggedIn);
        },
        error => this.loginErrorHandler(error, service)
      );
    }
  }

  loginErrorHandler(error: HttpErrorResponse, service: string) {
    this.lastMethodUsed = service;
    this.showLoginAlert = true;

    this.loginError = {
      title: "Error logging in",
      description: error.message,
      type: "danger"
    };

    this.loadingLogin = false;
    console.log("ERROR LOGIN", error);
  }

  retryLogin($event: boolean) {
    this.showLoginAlert = true;

    setTimeout(() => {
      if (this.lastMethodUsed !== "username") {
        this.loginWithService(this.lastMethodUsed);
      }
    }, 2000);
  }

  closeAlert($event: boolean) {
    this.showLoginAlert = false;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
      // remember: [true]
    });
  }
}
