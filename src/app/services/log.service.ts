import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  public writeLog(value: string) {
    if(value) {
      console.log(value);
    }
  }

}
