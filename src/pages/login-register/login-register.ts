import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { LoginResponse, User } from '../../interfaces/user';

/**
 * Generated class for the LoginRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login-register',
  templateUrl: 'login-register.html',
})
export class LoginRegisterPage {
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
        console.log(response);
        this.mediaProvider.loggedIn = true;
        //TODO: save the token localstorage
        // move to home page (navCtrl)
      },
      error => {
        console.log(error);
      });
  }

  // TODO: register method

}
