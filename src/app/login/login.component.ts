import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  eye = "";
  isLogin: boolean = true;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar, 
    private route: Router, 
    private logined: AppComponent) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  loginAccount(){
    console.log(this.form.value);
    let username = this.form.value.username;
    let password = this.form.value.password;

    if(username == "Admin" && password == "123"){
      this.snackBar.open("Login success", 'Dissmiss', {duration: 2500});
      this.route.navigateByUrl('/dashboard');
      this.logined.onLogin(this.isLogin);
      localStorage.setItem('username', username);
      
    }else{
      this.snackBar.open("Invalid user or password", 'Dissmiss', {duration: 2500});
    }
   
  
  }

}


