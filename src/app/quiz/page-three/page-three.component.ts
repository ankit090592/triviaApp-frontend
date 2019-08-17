import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {

  options = [{ option: "White" }, { option: "yellow" }, { option: "orange" }, { option: 'green' }]
  myForm: FormGroup;
  optionFormArray;
  constructor(private fb: FormBuilder, public appService: AppService, public router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      optionsListed: this.fb.array([])
    });
  }

  onChange(option: string, isChecked: boolean) {
    this.optionFormArray = <FormArray>this.myForm.controls.optionsListed;

    if (isChecked) {
      this.optionFormArray.push(new FormControl(option));
    } else {
      let index = this.optionFormArray.controls.findIndex(x => x.value == option)
      this.optionFormArray.removeAt(index);
    }
console.log("optionFormArray: " + this.optionFormArray.value)
    
  }

  public onClickSubmit: any = (event: any) => {
    
    if(this.optionFormArray === null || this.optionFormArray == undefined || this.optionFormArray.length == 0){
      alert("Please select atleast 1 option!")
    } else {
      // let data = {
      //   colours: ['1','2','3']
      // }
      // console.log("optionFormArray: " + JSON.stringify(this.optionFormArray))
      // this.appService.setUserInfoInLocalStorage(data)
    //   let sampleStr = this.optionFormArray.value.toString()
    // let colors = sampleStr.split(",",4)
      localStorage.setItem('infoColours', JSON.stringify(this.optionFormArray.value))
      this.router.navigate(['/p4']);
    }
  }


}
