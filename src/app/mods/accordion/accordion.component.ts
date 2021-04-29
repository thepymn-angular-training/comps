import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() data = [];
  openedItemIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(value: number) {
    if (this.openedItemIndex === value) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = value;
    }
  }

}
