import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginRegisterPage } from '../login-register/login-register';
import { Media } from '../../interfaces/pic';
import { MediaProvider } from '../../providers/media/media';

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

  mediaFiles: Media [] = [];

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

  backToWelcome() {
    this.navCtrl.setRoot(LoginRegisterPage);
  }

  logout() {
    localStorage.clear();
    this.backToWelcome();
  }

  media() {
    this.mediaProvider.getAvatar().subscribe((response) => {
        this.mediaFiles = response;
      },
      (err) => {
        console.log(err);
      });
  }
}
