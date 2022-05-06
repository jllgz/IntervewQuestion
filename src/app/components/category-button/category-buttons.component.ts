import { ICategory } from './../../interfaces/ICategory';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iqa-category-buttons',
  templateUrl: './category-buttons.component.html',
  styleUrls: ['./category-buttons.component.scss']
})
export class CategoryButtonsComponent implements OnInit {
  @Input() category: ICategory;

  constructor() { }

  ngOnInit(): void {
  }

}
