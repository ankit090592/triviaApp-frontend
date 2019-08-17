import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.css']
})
export class PageFourComponent implements OnInit {

  // public quizSummary;
  public userName;
  public answer1;
  public answer2;
  public flagColours=[];
  public viewHistory = false;
  public quizzesArray = [];
  constructor(public appService: AppService, public router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.userName = localStorage.getItem('infoName')
    this.answer1 = localStorage.getItem('infoPlayer')
    this.answer2 = JSON.parse(localStorage.getItem('infoColours'))
    // this.quizSummary = this.appService.getUserInfoFromLocalStorage()
    // console.log("Summary: " + (this.quizSummary))
    // this.flagColours = this.quizSummary.colours

  }


  public onClickFinish: any = (event: any) => {
    
    let data = {
      firstName: this.userName,
      quest1: this.answer1,
      quest2: this.answer2,
      createdOn: Date.now()
    }
    this.appService.saveQuiz(data).subscribe((apiResponse) => {

      console.log("apiResponse: " +apiResponse);

      if (apiResponse.status == 200) {

        this.toastr.success('Quiz saved!');

        setTimeout(() => {
          this.router.navigate(['/'])

        }, 2000);

      } else {

        this.toastr.error(apiResponse.message);

      }

    }, (err) => {

      this.toastr.error('some error occured');
      // console.log("Error message: " + err.message)

    });
  }

  public onClickHistory: any = (event: any) => {
    this.viewHistory = true;
    this.appService.getAllQuizzes().subscribe((data) => {
      if (data.status == 200) {
        this.quizzesArray = data['data']
        // this.flagColours = data['data']['quest2']
        console.log("All Issues: " + JSON.stringify(this.quizzesArray))
      }

      else if (data.status == 404) {
        // console.log("All issue in err:" + this.allIssues.length)
        this.toastr.info("No quizzes found!")
      }
    })
  }

}
