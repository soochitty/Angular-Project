import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getname(name:any) {
    alert("Function called  "+name);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
