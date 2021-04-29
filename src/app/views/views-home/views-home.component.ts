import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# Of Users' },
    { value: 900, label: 'Total Stars' },
    { value: 367, label: 'Reviews' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
