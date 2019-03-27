import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { RepositoriesPage } from '../repositories/repositories';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public loginForm: any;
  messageEmail = ""
  messagePassword = "";
  errorEmail = false;
  errorPassword = false;
  alertCtrl: any;

  constructor(formBuilder: FormBuilder,
    public navCtrl: NavController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.compose([Validators.minLength(6),
      Validators.required])],
    });
  }

  ionViewDidEnter() {
  }

  login() {
    let user = 'admin@admin.com';
    let pass = '123456';
    let { email, password } = this.loginForm.controls;

    if (!this.loginForm.valid) {
      if (!email.valid) {
        this.errorEmail = true;
        this.messageEmail = "Email inválido";
      } else {
        this.messageEmail = "";
      }

      if (!password.valid) {
        this.errorPassword = true;
        this.messagePassword ="A senha deve ter no mínimo 6 caracteres"
      } else {
        this.messagePassword = "";
      }
    }
    else {
      if (this.loginForm.value.email == user && this.loginForm.value.password == pass){
        this.navCtrl.setRoot(RepositoriesPage); 
      }else{
        this.messagePassword = "";
        this.messageEmail = "";
        alert("O email ou senha está incorreto!");             
      }         
    }
  }

}
