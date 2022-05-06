import { questions } from './../../local/questions';
import { categories } from './../../local/categories';
import { Injectable } from '@angular/core';
import { IQuestion } from '../../interfaces/IQuestion';
import { ICategory } from '../../interfaces/ICategory';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  questionList: IQuestion[] = questions;
  categoryList: ICategory[] = categories;

  constructor() { }

  public getQuestionsById(categoryId: number) {
    return this.questionList.filter((question) => question.categoryId === categoryId);
  }

  public getCategoryById(id: number) {
    return this.categoryList.find(category => category.id === id);
  }


  public getAllQuestionCount() {
    return this.questionList.length;
  }
}
