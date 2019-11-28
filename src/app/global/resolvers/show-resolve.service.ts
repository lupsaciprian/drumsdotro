import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { ShowsService } from "src/app/global/services/shows/shows.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ShowModel } from "src/app/global/models/show.model";

@Injectable({
  providedIn: "root"
})
export class ShowResolve implements Resolve<ShowModel | ShowModel[]> {
  constructor(private showsService: ShowsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): ShowModel | Observable<ShowModel[]> {
    const show = this.showsService.getIndividualShow(route.params.showName);

    if (!show) return this.showsService.getShowsObservable();
    else return show;
  }
}
