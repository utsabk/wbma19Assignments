import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { Media } from '../../interfaces/pic';
import { User } from '../../interfaces/user';

/**
 * Generated class for the PlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {
  file: Media;
  type = '';
  user: User;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {

    this.mediaProvider.getSingleMedia(this.navParams.get('fieldId')).
      subscribe((response: Media) => {
        this.file = response;
        this.type = response.media_type;
        this.mediaProvider.getUser(response.user_id,
          localStorage.getItem('token')).subscribe((user: User) => {
          this.user = user;
        });
      });
  }

}


