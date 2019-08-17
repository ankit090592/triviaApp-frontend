import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  isValidFormSubmitted = false;
  model: any = {};
  public player: any;
  constructor(public appService: AppService, public router: Router) { }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    this.model.player = form.controls['player'].value;
    let data = {
      player: this.model.player
    }
    // this.appService.setUserInfoInLocalStorage(data)
    console.log("Player: " +typeof(this.model.player))
    localStorage.setItem('infoPlayer', this.model.player)
    this.router.navigate(['/p3']);
  }
}
