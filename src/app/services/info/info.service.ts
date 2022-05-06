import { IQuestion } from './../../interfaces/IQuestion';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  public getUsedQuestions(items: IQuestion[]) {
    // return localStorage.getItem()
  }

  public setUsedQuestions(itemName: string) {
    return localStorage.setItem('testObject', JSON.stringify(itemName));
  }
}
