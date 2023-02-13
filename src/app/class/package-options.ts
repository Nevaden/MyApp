import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class PackageOptions implements InMemoryDbService {
    
    packageOptions = [
        { title: 'starter', price: 1, description: 'Starter features for your business to grow.',isSelected: false},
        { title: 'regular', price: 25, description: 'Regular features for your business to grow.',isSelected: false},
        { title: 'professional', price: 75, description: 'Professional features for your business to grow.',isSelected: false},
        { title: 'ultimate', price: 115, description: 'The ultimate set of features for your business to grow.',isSelected: false},
      ];

      createDb() {
        return { packageOptions: this.packageOptions };
    } 
  
    updateSelection(packageOption: { isSelected: boolean; }) {
        this.packageOptions.forEach((p: { isSelected: boolean; }) => p.isSelected = false);
        packageOption.isSelected = true;
        this.hassSelectedItem();
      }

      hassSelectedItem() {
        return this.packageOptions.some((p: { isSelected: any; }) => p.isSelected);
      }
}
