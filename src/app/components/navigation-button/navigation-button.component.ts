import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iqa-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent implements OnInit {
  @Input() direction: string;
  @Input() btnColor: string;
  constructor() { }

  ngOnInit(): void {
  }

}
