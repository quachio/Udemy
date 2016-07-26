import { Injectable } from '@angular/core'; 
import { LogService } from './log.service';

@Injectable() // You only need this if you service needed to be injected with other service
export class DataService {
  private data: string[] = [];

  constructor(private logService: LogService) {}

  addData(input: string) {
    this.data.push(input);
    this.logService.writeToLog('Saved item: ' + input);
  }

  getData(){
    return this.data;
  }
}
