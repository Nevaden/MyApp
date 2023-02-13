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

export class DataResolver implements Resolve<{array1: any[], array2: any[]}> {
  constructor(private dataService: PackageOptions){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const data = this.dataService.createDb().packageOptions;
    const half = data.length / 2;
    return {
      array1: data.slice(0, half),
      array2: data.slice(half)
    };
  }
}

