import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { Media } from '../../interfaces/pic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  mediaArray: Media[] = [];

  constructor(
    private mediaProvider: MediaProvider, public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.getAllFiles();
  }

  getAllFiles() {
    this.mediaProvider.getAllMedia().subscribe((result: Media[]) => {

        result.forEach((pic: Media) => {
          this.mediaProvider.getSingleMedia(pic.file_id).
            subscribe((file: Media) => {
              this.mediaArray.push(file);
            });
        });
      }, (err) => {
        console.log(err);
      },
    );
  }

}

