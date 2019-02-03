import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { LoginResponse, User } from '../../interfaces/user';
import { RegisterPage } from '../register/register';

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
  user: User = { username: null };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginRegisterPage');
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

  createAccount() {
    this.navCtrl.push(RegisterPage);
  }

}
