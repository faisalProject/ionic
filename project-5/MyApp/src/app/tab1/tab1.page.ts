import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  form = {
    username : '',
    password : ''
  }

  constructor(private route : Router) {}

  doLogin(){
    localStorage.setItem('username', this.form.username);
    localStorage.setItem('password', this.form.password);
    
    this.route.navigate(['welcome']);
  }

}
