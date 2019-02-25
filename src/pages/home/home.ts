import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { Media } from '../../interfaces/pic';
import { Observable } from 'rxjs';
import { MediaUploaderPage } from '../media-uploader/media-uploader';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { PlayerPage } from '../player/player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  mediaArray: Observable<Media[]>;
  start = 0;

  constructor(
    private mediaProvider: MediaProvider, public navCtrl: NavController,
    public photoViewer: PhotoViewer) {

  }

  ionViewDidEnter() {
    this.getAllFiles();
  }

  getAllFiles() {
    this.mediaArray = this.mediaProvider.getAllMedia();
  }

  uploadFiles() {
    this.navCtrl.push(MediaUploaderPage);
  }

  view(fileId: number) {
    // this.photoViewer.show()
    this.mediaProvider.getSingleMedia(fileId).subscribe(response => {
        console.log(response);
        this.photoViewer.show(response.filename);
      }, error => {
        console.log(error);
      },
    );
  }

  showFile(file) {
    this.navCtrl.push(PlayerPage, { fieldId: file }).catch();
  }

  loadMore() {
    this.start += 20;
  }

}

