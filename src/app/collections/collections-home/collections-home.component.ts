import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Peyman', age: 17, job: 'Engineer' },
    { name: 'Ali', age: 23, job: 'Designer' },
    { name: 'Maryam', age: 21, job: 'Designer' },
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
