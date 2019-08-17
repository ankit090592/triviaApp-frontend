import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  model: any = {};
  public firstName: any;

  constructor(public appService: AppService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    let data = {
      firstName: this.model.firstName
    }
    // this.appService.setUserInfoInLocalStorage(data)
    localStorage.setItem('infoName', this.model.firstName)
  this.router.navigate(['/p2']);
  }

}
