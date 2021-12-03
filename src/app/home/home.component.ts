import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  form!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      Name:['',],
      Address1:['',],
      Address2:['',],
      City:['',],
      State:['',],
    })
    
  }



  get formcontrols(){
    return this.form.controls
  }





}
