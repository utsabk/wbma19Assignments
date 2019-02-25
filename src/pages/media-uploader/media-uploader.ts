import { Component, ViewChild } from '@angular/core';
import {
  LoadingController,
  NavController,
  NavParams,
  normalizeURL,
} from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { Chooser } from '@ionic-native/chooser';
import { Camera, CameraOptions } from '@ionic-native/camera';
/*import {
  FileTransfer,
  FileTransferObject,
  FileUploadOptions,
} from '@ionic-native/file-transfer';'*/

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
  @ViewChild('uploadForm') myForm: any;
  fileData = '';
  file: File;
  type = '';
  title = '';
  description = '';
  myImage: any;

  filters = {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    warmth: 100,
  };

  fileInfo: any = {
    title: '',
    description: '',
  };

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public mediaProvider: MediaProvider,
    public loadingCtrl: LoadingController,
    public chooser: Chooser,
    public camera: Camera,
   // public fileTransfer: FileTransfer
    ) {
  }

  ionViewDidLoad() {
  }

  loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Your file is uploading...',
  });

  handleChange($event) {
    this.file = $event.target.files[0];
    this.showPreview();
  }

  choosePicture() {
    this.chooser.getFile('image/*, video/*, audio/*').then(file => {
      console.log(file ? file.name : 'canceled');
      console.log(file);
      this.myImage = new Blob([file.data], { type: file.mediaType });

    }).catch((error: any) => console.error(error));
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      imageData => {
        console.log(imageData);
        this.myImage = normalizeURL + imageData;
        console.log(this.myImage);
        if (this.myImage.includes('jpg')) {
          this.type = 'image/jpeg';
        } else {
          this.type = 'video/mp4';
          this.myImage = 'http://via.placeholder.com/500X200/000?text=Video';
        }
        this.file = imageData;
      },
      err => {
        console.log(err);
      },
    );
  }

  upload() {
    const description = `[d]${this.description}[/d]`;
    const filters = `[f]${JSON.stringify(this.filters)}[/f]`;
    // show spinner
    this.loading.present().catch();

    const fd = new FormData();
    fd.append('title', this.title);
    fd.append('description', description + filters);
    // fd.append('file', this.file);
    fd.append('file', this.myImage);

    this.mediaProvider.upload(fd).subscribe(resp => {

      // setTimeout 2 secs
      setTimeout(() => {
          // hide spinner
          this.loading.dismiss().catch();
          this.navCtrl.pop().catch();
        },
        2000,
      );
    }, error => {
      console.log(error);
    });
  }
  /*
  upload() {
    const description = `[d]${this.fileInfo.description}[/d]`;
    const filters = `[d]${this.filters}[/d]`;
    const fileTransfer: FileTransferObject = this.fileTransfer.create();

    const options: FileUploadOptions = {
      mimeType: this.type,
      headers: {
        'x-access-token':
          localStorage.getItem('token'),
      },
      params: {
        'title': this.fileInfo.title,
        'description': description + filters,
      },
    };

    fileTransfer.upload(this.file, this.mediaProvider.baseUrl + '/media',
      options).then((data) => {
      console.log('OUKEI', data);
      setTimeout(() => {
        this.loading.dismiss().catch();
        this.mediaProvider.refresh = true;
        this.navCtrl.pop().catch();
      }, 2000);
    }, (err) => {
      console.log('virhe', err);
      this.loading.dismiss().catch();
    });

  }*/

  dataURItoBlob(dataURI) {
    const binary = atob(dataURI.split(',')[1]);
    const array = [];
    console.log('binary:' + binary);
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    // @ts-ignore
    this.upload();
  }

  showPreview() {
    const reader = new FileReader();
    reader.onloadend = (evt) => {
      console.log(reader.result);
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

  reset() {
    this.myForm.reset();
    this.fileData = null;
    this.file = null;
  }

}
