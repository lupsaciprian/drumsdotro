import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-show-individual",
  templateUrl: "./show-individual.component.html",
  styleUrls: ["./show-individual.component.less"]
})
export class ShowIndividualComponent implements OnInit {
  @Input("showImage") image: string;
  constructor() {}

  ngOnInit() {}
}
