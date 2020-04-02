import { Component, OnInit } from '@angular/core';
import {Login, User} from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public Login: Login;
  public  formSubmited: boolean;

  constructor() { }

  ngOnInit(): void {
    this.formSubmited = false;
    this.Login = {
      id: 1,
      Gmail: '',
      Password: ''
    };
  }
  public onSubmited(){
    // todo: логіка
    this.formSubmited = true;
  }
}
