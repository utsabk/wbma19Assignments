import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginRegisterPage } from '../login-register/login-register';
import { MediaProvider } from '../../providers/media/media';
import { User } from '../../interfaces/user';

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-logout',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  userData: User = { username: null };

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

  logout() {
    localStorage.clear();
    this.mediaProvider.loggedIn = false;
    this.navCtrl.setRoot(LoginRegisterPage);
  }

  media() {
    this.mediaProvider.getUserData().subscribe((response) => {
        this.userData = response;
      },
      (err) => {
        console.log(err);
      });
  }
}
