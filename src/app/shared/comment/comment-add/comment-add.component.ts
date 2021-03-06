import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Summary } from 'src/app/models/summary';
import { CommnentService } from 'src/utils/services/comment/commnet.service';
import { SummaryService } from 'src/utils/services/summary/summary.service';
import { Comment } from '../../../models/comment';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.scss']
})
export class CommentAddComponent implements OnInit {
  constructor(
    private _alertService: MatSnackBar,
    private _commentService: CommnentService,
    private _activatedRoute: ActivatedRoute,
    private _summaryService: SummaryService,
    private _router:Router
  ) { }

  user_id: number;
  CommnetID: number;
  SummaryID: number;
  comment: Comment[];
  modelComment: Comment = new Comment();
  modelSummary: Summary = new Summary();

  ngOnInit(): void {
    this.SummaryID = parseInt(this._activatedRoute.snapshot.paramMap.get('SummaryID'));
    this.getSummaryInformation(this.SummaryID);
    this.getByIdSummary(this.SummaryID);
  }

  onSave(commentForm: NgForm) {
    if (!commentForm.valid) {
      this._alertService.open(
        'Lütfen Boş Yerleri Doldurunuz !',
        'HATA',
        {
          duration: 2000,
        }
      );
      console.log("if:", commentForm.value);
    }
    else {
      this.onAddComment(commentForm);
      console.log("else:", commentForm.value);
      
    }
  }
  onAddComment(commentForm: NgForm) {
    console.log("sadasd", commentForm.value)
    this._commentService.commentAdd({
      CommentName: commentForm.value.CommentName,
      CommentText: commentForm.value.CommentText,
      SummaryID: this.SummaryID,
      UserID: JSON.parse(localStorage.getItem('currentUser')).id
    }).pipe(first())
      .subscribe(
        data => {
          console.log('data', data);
        },
        error => {
          console.log('error', error);
          this._alertService.open(
            'Yorum eklenemedi!',
            'HATA',
            {
              duration: 2000,
            }
          );
        });
    this._alertService.open(
      'Yorum başarılı bir şekilde kayıt edilmiştir :)',
      'İŞLEM BAŞARILI',
      {
        duration: 2000,
      }
    );
    this._router.navigate(['/user/comment/view']);

  }

  getSummaryInformation(summary_id) {
    this._summaryService.getSumamryByID(summary_id).subscribe(data => {
      this.modelSummary.SummaryID = data['summaryData'].SummaryID;
      this.modelSummary.SummaryText = data['summaryData'].SummaryText;
      const BookID = data['summaryData'].BookID;
      this.getCommentInformation(BookID);
    });
  }
  getCommentInformation(comment_id) {
    this._commentService.getByIDComment(comment_id).subscribe(comment => {
      this.modelComment = comment;
    });
  }

  getByIdSummary(summary_id) {
    this._commentService.getCommentBySummary(summary_id).subscribe(data => {
      this.comment = data;
    });
  }
}
