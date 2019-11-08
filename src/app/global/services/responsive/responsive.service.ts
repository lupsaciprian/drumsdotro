import { Injectable } from "@angular/core";
// import { Subject } from "rxjs";
// import { debounceTime } from "rxjs/operators";

interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

@Injectable({
  providedIn: "root"
})
export class ResponsiveService {
  public breakpoints: Breakpoints = {
    xs: 480,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600
  };
  public viewport: string;
  public innerWidth: number;
  // public windowWidth: Subject = new Subject(0);
  // constructor() {
  //   this.initialWidth();
  // }
  // initialWidth() {
  //   console.log(window.innerWidth);
  //   this.windowWidth.next(window.innerWidth);
  // }
  setWidth(width: number) {
    this.innerWidth = width;
    // console.log(width);
    if (width <= this.breakpoints.md) this.viewport = "mobile";
    else if (width <= this.breakpoints.xl) this.viewport = "tablet";
    else this.viewport = "desktop";
  }
}
