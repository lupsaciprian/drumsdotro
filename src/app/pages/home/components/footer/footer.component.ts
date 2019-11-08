import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { NzModalService } from "ng-zorro-antd";

import { AuthenticateComponent } from "src/app/global/components/authenticate/authenticate.component";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.less"]
})
export class FooterComponent implements OnInit {
  constructor(private modalService: NzModalService, private router: Router) {}

  ngOnInit() {}

  onLoginOrRegister(): void {
    const modal = this.modalService.create({
      nzTitle: "Login",
      nzContent: AuthenticateComponent,
      nzComponentParams: {
        // title: "title in component",
        // subtitle: "component sub title，will be changed after 2 sec"
      },
      // ,
      nzFooter: [
        {
          label: "Cancel",
          onClick: componentInstance => {
            componentInstance!.title = "title in inner component is changed";
          }
        }
      ]
    });

    modal.afterOpen.subscribe(() => console.log("[afterOpen] emitted!"));

    // Return a result when closed
    modal.afterClose.subscribe(result =>
      console.log("[afterClose] The result is:", result)
    );

    // delay until modal instance created
    setTimeout(() => {
      const instance = modal.getContentComponent();
      // instance.subtitle = "sub title is changed";
    }, 2000);
  }

  // onLoginOrRegister() {
  //   this.router.navigate(["/admin"]);
  // }
}
