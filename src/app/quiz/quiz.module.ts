import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageFourComponent } from './page-four/page-four.component';

@NgModule({
  declarations: [PageOneComponent, PageTwoComponent, PageThreeComponent, PageFourComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      { path: 'p1', component: PageOneComponent },
      { path: 'p2', component: PageTwoComponent },
      { path: 'p3', component: PageThreeComponent },
      { path: 'p4', component: PageFourComponent }
    ])
  ]
})
export class QuizModule { }
