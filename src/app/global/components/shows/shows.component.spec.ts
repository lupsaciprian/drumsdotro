import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FutureShowsComponent } from "./shows.component";

describe("FutureShowsComponent", () => {
  let component: FutureShowsComponent;
  let fixture: ComponentFixture<FutureShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FutureShowsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
