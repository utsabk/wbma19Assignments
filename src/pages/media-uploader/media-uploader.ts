import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';

/**
 * Generated class for the MediaUploaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-media-uploader',
  templateUrl: 'media-uploader.html',
})
export class MediaUploaderPage {
  fileData = '';
  file: File;
  type = '';
  title = '';
  description = '';

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {
  }

  handleChange($event) {
    this.file = $event.target.files[0];
    this.showPreview();
  }

  showPreview() {
    const reader = new FileReader();
    reader.onloadend = (evt) => {
      // console.log(reader.result);
      this.fileData = reader.result;
    };

    if (this.file.type.includes('video')) {
      this.fileData = 'http://via.placeholder.com/500X200/000?text=Video';
    } else if (this.file.type.includes('audio')) {
      this.fileData = 'http://via.placeholder.com/500X200/000?text=Audio';
    } else {
      reader.readAsDataURL(this.file);
    }
  }

  upload() {
    // const desc = `<description>${this.description}</description>`;
    // const filters = '<filters>filtersAsText</filters>';

    // show spinner
    const fd = new FormData();
    fd.append('title', this.title);
    fd.append('description', this.description);
    fd.append('file', this.file);
    this.mediaProvider.upload(fd).subscribe(resp => {
      console.log(resp);
      // TODO: setTimeout 2 secs
      this.navCtrl.pop().catch();
      // TODO: hide spinner
    });
  }
}
