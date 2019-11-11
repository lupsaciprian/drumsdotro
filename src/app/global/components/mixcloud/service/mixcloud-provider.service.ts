import { Injectable } from "@angular/core";
import {
  HttpParams,
  HttpClient,
  HttpErrorResponse
} from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MixcloudProviderService {
  public pageLimit: number = 5;

  constructor(private http: HttpClient) {}

  getMixcloudMixes(fromPage?: number, profile?: string) {
    console.log("FROM", fromPage);
    let params = new HttpParams();
    if (fromPage > 1) {
      params = params.append("limit", this.pageLimit.toString());
      params = params.append(
        "offset",
        (fromPage ? fromPage * this.pageLimit : 0).toString()
      );
    }
    return this.http
      .get<any>(`https://api.mixcloud.com/${profile}zx/cloudcasts/`, {
        params
      })
      .pipe(
        map(mixes => {
          console.log(mixes, mixes.data.slice(0, this.pageLimit));
          if (mixes.data.length > this.pageLimit) {
            return {
              ...mixes,
              data: mixes.data.slice(0, this.pageLimit)
            };
          }
          return mixes;
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          console.log(errorResponse);
          if (
            errorResponse.error &&
            errorResponse.error.error &&
            errorResponse.error.error.message
          )
            return throwError(
              `${errorResponse.error.error.message} (${errorResponse.error.error.type})`
            );

          return throwError(
            `An network error occured while loading Mixcloud. (${errorResponse.name})`
          );
        })
      );
  }
}
