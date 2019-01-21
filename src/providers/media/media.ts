import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Media } from '../../interfaces/pic';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  mediaApi = ' http://media.mw.metropolia.fi/wbma/';

  constructor(public http: HttpClient) {
    console.log('Hello MediaProvider Provider');
  }

  getAllMedia() {
    return this.http.get<Media[]>(this.mediaApi + 'media');
  }

  getSingleMedia(id) {
    return this.http.get<Media>(this.mediaApi + 'media/' + id);
  }
}
