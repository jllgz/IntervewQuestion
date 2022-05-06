import { ICategory } from './../../interfaces/ICategory';
import { IQuestion } from './../../interfaces/IQuestion';
import { LookupService } from './../../services/lookup/lookup.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'iqa-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private router: Router, private lookupService: LookupService) { }
  id: number;
  private sub: any;
  questionInfo: IQuestion;
  questionList: IQuestion[];
  categoryInfo?: ICategory;
  usedQuestions: IQuestion[] = [];
  questionCount: number = 1;

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = Number(params['id']);
    });
    this.questionList = this.lookupService.getQuestionsById(this.id);
    this.questionInfo = this.randomizeQuestions(this.questionList);
    this.categoryInfo = this.lookupService.getCategoryById(this.questionInfo.categoryId);
    this.usedQuestions = JSON.parse(localStorage.getItem("used_questions") || '[]');
    this.questionCount = this.usedQuestions ? this.usedQuestions.length + 1 : 0;
  }

  randomizeQuestions(questions: IQuestion[]) {
    return questions[Math.floor(Math.random() * questions.length)];
  }

  loadNextQuestion() {
    this.usedQuestions.push(this.questionInfo);
    this.questionList.splice(this.questionList.findIndex(q => q.id === this.questionInfo.id), 1);
    this.questionInfo = this.randomizeQuestions(this.questionList);
    this.questionCount++;
  }

  returnToMainPage() {
    localStorage.setItem("used_questions", JSON.stringify(this.usedQuestions)); //store colors
    this.router.navigateByUrl('');
  }

  

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
