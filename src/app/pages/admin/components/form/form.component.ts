import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormArray,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.less"]
})
export class FormComponent implements OnInit {
  public form: FormGroup;

  genresOptions: string[] = ["Drum & Bass", "Dnb"];
  artistOptions: string[] = ["Cips", "Acidtech"];

  constructor(private fb: FormBuilder) {}

  addNewFormArray() {
    (<FormArray>this.form.get("links")).controls.push(this.fb.control(""));
  }

  submitForm() {
    for (const control in this.form.controls) {
      this.form.controls[control].markAsDirty();
      this.form.controls[control].updateValueAndValidity();
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      artist: [null, [Validators.required]],
      imageUrl: [null, [Validators.required]],
      required: [false],
      genres: [[], [Validators.required]],
      links: this.fb.array([])
    });
  }
}
