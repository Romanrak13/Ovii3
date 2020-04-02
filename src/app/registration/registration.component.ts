import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: User;
  public  formSubmited: boolean;
  constructor() { }

  ngOnInit() {
    this.formSubmited = false;
    this.user = {
      id: 1,
      firstName: '',
      Gmail: '',
      Password: ''
    };
  }
  public onSubmited(){
    // todo: логіка
    this.formSubmited = true;
  }
}
