import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import {
  LoginResponse,
  RegisterResponse,
  userExists,
} from '../../interfaces/user';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') usernameInput;
  @ViewChild('registerForm') form: any;

  userAlert = false;

  showRegister = false;

  confirmPassword = '';

  user: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mediaProvider: MediaProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginRegisterPage');
  }

  swapForm() {
    this.showRegister = !this.showRegister;
  }

  showAlert(message) {
    const alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK'],
    });
    alert.present().catch();
  }

  checkUserExists() {
    this.mediaProvider.checkUsers(this.user.username).
      subscribe((data: userExists) => {
        console.log(data.available);
        if (!data.available) {
          this.userAlert = true;
          this.usernameInput.clearInput = true;
        } else {
          this.userAlert = false;
        }
      });

  }

  passwordCheck() {
    console.log(this.user.password);
    console.log(this.confirmPassword);
    if (this.user.password !== this.confirmPassword) {
      this.showAlert('Password do not match');
      return;
    }
  }

  register() {
    this.mediaProvider.register(this.user).subscribe(
      (data: RegisterResponse) => {
        this.login();
        this.form.reset();
      }, error => {
        console.log(error);
        this.showAlert(error.error.message);
      },
    );

  }

  login() {
    this.mediaProvider.login(this.user).subscribe(
      (response: LoginResponse) => {

        // console.log(response);
        this.mediaProvider.loggedIn = true;

        // save the token to localstorage
        localStorage.setItem('token', response.token);
        this.mediaProvider.user = response.user;

        localStorage.setItem('userId', response.user.user_id.toString());

        // move to the home page (use navCtrl)
        this.navCtrl.parent.select(0);
      },
      error => {
        console.log(error);
      });
  }

}
