import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PackageOptions } from '../class/package-options';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<any> {
  constructor(private dataService: PackageOptions){}
  resolve(): Observable<any> {
    const data = this.dataService.createDb().packageOptions;


    // Divide the data into two parts
    let firstHalf = data.slice(0, data.length / 2);
    let secondHalf = data.slice(data.length / 2);

    // Return the two parts as an observable
    return new Observable((observer) => {
      observer.next([firstHalf, secondHalf]);
      observer.complete();
    });

  }
}

