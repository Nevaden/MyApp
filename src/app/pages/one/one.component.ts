import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackageOptions } from 'src/app/class/package-options';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  data!: any;
  constructor(private route: ActivatedRoute, private dataService: PackageOptions) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.data = data['data'].array1
    });
  }

}
