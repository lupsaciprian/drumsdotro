import { Injectable } from "@angular/core";
import { HttpParams, HttpClient } from "@angular/common/http";

import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class MixcloudProviderService {
  public allMixes: any[] = [];
  public pageLimit: number = 5;

  constructor(private http: HttpClient) {}

  getMixcloudMixes(fromPage?: number) {
    let params = new HttpParams();
    params = params.append("limit", this.pageLimit.toString());
    params = params.append(
      "offset",
      (fromPage ? fromPage * this.pageLimit : 0).toString()
    );

    // const dateTo = moment()
    //   .utc()
    //   .format("YYYY-MM-DD HH:MM:SS");
    // const dateFrom = moment(moment().subtract(1, "m"))
    //   .utc()
    //   .format("YYYY-MM-DD HH:MM:SS");
    // params = params.append("since", dateTo);
    // params = params.append("until", dateFrom);

    return this.http.get<any>(
      "https://api.mixcloud.com/drumsdotro/cloudcasts/",
      {
        params
      }
    );
  }

  // 30 Items
  // page 2
  // 4 - 9

  getExistingMixcloudMixes(fromPage: number) {
    // 2 * 5 - 1
    let sliceFrom, sliceTo;
    if (fromPage === 1) {
      sliceFrom = 0;
      sliceTo = this.pageLimit;
    } else {
      sliceFrom = (fromPage - 1) * this.pageLimit - 1;
      sliceTo = fromPage * this.pageLimit - 1;
    }

    console.log(
      "GETTING PREVIOUS",
      sliceFrom,
      sliceTo,
      this.allMixes.slice(sliceFrom, sliceTo)
    );
    return this.allMixes.slice(sliceFrom, sliceTo);
  }

  appendMixes(mixes: any[]) {
    this.allMixes = this.allMixes.concat(mixes);
  }

  canLoadNextPage(): boolean {
    return this.allMixes.length % this.pageLimit === 0;
  }

  checkIfPageExists(page: number): boolean {
    // if (th)
    console.log(this.allMixes.length, page * this.pageLimit);
    if (this.allMixes.length % this.pageLimit !== 0) return false;

    return this.allMixes.length < page * this.pageLimit;
  }

  totalMixcloudMixesLength() {
    if (this.canLoadNextPage()) return this.allMixes.length + 1;
    else return this.allMixes.length;
  }
}
