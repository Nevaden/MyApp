import { Component, OnInit, Input } from '@angular/core';
import { PackageOptions } from 'src/app/class/package-options';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item: any;

  constructor( public packageOptionsService: PackageOptions ) { }

  ngOnInit(): void {
   
  }

  updateSelection(packageOption: any) {
    if (packageOption) {
      this.packageOptionsService.updateSelection(packageOption);
    } else {
      const selected = (element: { isSelected: any; }) => element.isSelected
      const selectedOption = this.packageOptionsService.packageOptions.find(selected)
      selectedOption!.isSelected = false;
    }
  }

  getClasses(item: { isSelected: any; }) {
    return {
      [this.item.title]: true,
      'selected': item.isSelected,
      'not-selected': !item.isSelected && this.hasSelectedItem()
    };
  }
  
  hasSelectedItem(): boolean {
    const selected = (element: { isSelected: any; }) => element.isSelected
    return this.packageOptionsService.packageOptions.some(selected)
  }
  
}
