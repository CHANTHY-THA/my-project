import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showLight: boolean = false;
  isLogin: boolean = false;
  title = 'my-app';

  constructor(
    private route: Router,
    private snackBar: MatSnackBar,
    ){
    
    };

  ngOnInit(): void {
    let username = localStorage.getItem('username');
    console.log(username);
    
    if(username != null){
      this.isLogin = true;
    }
  }

 
  onLogin(login: boolean){
    console.log(login);
    this.isLogin = login;
  }

  onLogout(){
    this.isLogin = false;
    this.route.navigateByUrl('/');
    this.snackBar.open("Logout success", 'Dissmiss', {duration: 2500});
    localStorage.clear();
  }
}
