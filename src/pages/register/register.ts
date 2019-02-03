import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterResponse, User } from '../../interfaces/user';
import { HomePage } from '../home/home';
import { MediaProvider } from '../../providers/media/media';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user: User = { username: null };

  constructor(
    public navCtrl: NavController, public mediaProvider: MediaProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    this.mediaProvider.register(this.user).subscribe(
      (data: RegisterResponse) => {
        this.mediaProvider.loggedIn = true;
        this.navCtrl.push(HomePage);
        // console.log(response);

      },
    );

  }

}
