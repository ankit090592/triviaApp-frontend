import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    setTimeout(() => {

      this.router.navigate(['/p1']);

    }, 2000);
  }

}