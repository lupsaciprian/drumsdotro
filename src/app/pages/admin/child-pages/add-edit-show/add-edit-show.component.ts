import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormArray,
  FormControl
} from "@angular/forms";

import { ShowsService } from "src/app/global/services/shows/shows.service";
import { ShowModel } from "src/app/global/models/show.model";
import { StepperService } from "src/app/global/services/stepper.service";

@Component({
  selector: "app-add-edit-show",
  templateUrl: "./add-edit-show.component.html",
  styleUrls: ["./add-edit-show.component.less"],
  providers: [StepperService]
})
export class AddEditShowComponent implements OnInit {
  showForm: FormGroup;

  genresOptions: string[] = ["Drum & Bass", "Dnb"];
  artistOptions: string[] = ["Cips", "Acidtech"];

  constructor(
    private fb: FormBuilder,
    private showsService: ShowsService,
    private stepper: StepperService
  ) {}

  addNewLink() {
    (<FormArray>this.showForm.get("links")).controls.push(this.fb.control(""));
  }

  submitForm() {
    for (const control in this.showForm.controls) {
      this.showForm.controls[control].markAsDirty();
      this.showForm.controls[control].updateValueAndValidity();
    }
    console.log(this.showForm.get("links"));
    console.log(this.showForm);
  }

  ngOnInit(): void {
    this.showForm = this.fb.group({
      name: [null, [Validators.required]],
      artist: [null, [Validators.required]],
      imageUrl: [null, [Validators.required]],
      required: [false],
      genres: [[], [Validators.required]],
      links: this.fb.array([])
    });

    console.log(this.showForm.get("links"));

    this.showsService.showsStream.subscribe((shows: ShowModel[]) => {});

    console.log(this.showForm.get("imageUrl").value);
  }
}
