import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  public account: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.account = this.formBuilder.group({
      fullname: '',
      email: ''
    });
  }

  ngOnInit() {
  }

}
