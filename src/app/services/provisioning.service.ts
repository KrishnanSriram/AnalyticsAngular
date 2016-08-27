import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ProvisioningService {

  public configType: string;
  private configFilePath: string;
  private _CONFIG_FILE: string = "data.json";

  constructor(private http:Http) {
    this.configType = "HOME";
    this.configFilePath = "app/data/json/home/data.json";

  }

  public getData() : Observable<any> {
    if(this.configType == "HOME") {
      return this.getHomePageData();
    }
  }

  private getHomePageData() : Observable<any> {
    console.log('Get data for HOME page');

    return this.http.get(this.configFilePath)
      .map((res:Response) => this.extractData(res));
      // .subscribe(
      //   data => { console.dir(data)},
      //   err => console.error(err),
      //   () => console.log('done')
      // );
  }

  private extractData(res: Response) {
    console.log('Extract data');
    let body = res.json();
    console.dir(body);
    return body;
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

  /*
  Allow for different type of parameters to be passed in. Like HOME, ABOUT, CONTACTS etc. Based on the
  parameters we will load and return appropriate config file
  */

}
