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
  ];
  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a good couch to sit on'
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dersser',
      description: 'This is a good dresser to put things on'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
