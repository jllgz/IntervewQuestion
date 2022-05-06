import { ICategory } from './../../interfaces/ICategory';
import { Component, OnInit } from '@angular/core';
import { categories } from 'src/app/local/categories';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'iqa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: ICategory[] = categories;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  resetQuestions() {
    localStorage.clear();
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.success('Successfully resset questions');
  }

}
