import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ShowsService } from "src/app/global/services/shows/shows.service";
import { ShowModel } from "src/app/global/models/show.model";

@Component({
  selector: "app-add-edit-show",
  templateUrl: "./add-edit-show.component.html",
  styleUrls: ["./add-edit-show.component.less"]
})
export class AddEditShowComponent implements OnInit {
  validateForm: FormGroup;

  genres: string[] = [];
  genresOptions: string[] = ["Drum & Bass", "Dnb"];

  submitForm(): void {
    console.log(this.validateForm);
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  requiredChange(required: boolean): void {
    if (!required) {
      this.validateForm.get("nickname")!.clearValidators();
      this.validateForm.get("nickname")!.markAsPristine();
    } else {
      this.validateForm.get("nickname")!.setValidators(Validators.required);
      this.validateForm.get("nickname")!.markAsDirty();
    }
    this.validateForm.get("nickname")!.updateValueAndValidity();
  }

  constructor(private fb: FormBuilder, private showsService: ShowsService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      imageUrl: ["", [Validators.required]],
      required: [false],
      genres: [this.genres, [Validators.required]]
    });

    this.showsService.showsStream.subscribe((shows: ShowModel[]) => {
      console.log(shows);
      for (let show of shows) {
        this.genres.concat(show.genre);
      }
      console.log(this.genres);
    });
  }
}
