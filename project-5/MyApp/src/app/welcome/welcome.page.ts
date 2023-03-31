import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  form = {
    username: localStorage.getItem('username'),
  }

  constructor(private route : Router) { }

  ngOnInit() {
  }

  doLogout(){
    localStorage.clear();
    this.route.navigateByUrl('');
  }

}
