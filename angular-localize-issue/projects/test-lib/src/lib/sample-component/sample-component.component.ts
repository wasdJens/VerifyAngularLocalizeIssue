import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent implements OnInit {
  title = $localize`You have 10 users`;
  constructor() { }

  ngOnInit(): void {
  }
}
