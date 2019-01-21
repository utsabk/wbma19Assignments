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
        this.mediaArray = result.map((pic: Media) => {
          // add thumbnails property to pic

          const nameArray = pic.filename.split('.')[0];

          pic.thumbnails = {
            160: nameArray + '-tn160.png',
          };
          console.log('pic.thumbnails', pic);
          return pic;

        });
      }, (err) => {
        console.log(err);
      },
    );
  }

}

