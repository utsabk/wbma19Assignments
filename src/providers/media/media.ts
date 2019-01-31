import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Media } from '../../interfaces/pic';
import { LoginResponse, RegisterResponse, User } from '../../interfaces/user';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  mediaApi = ' http://media.mw.metropolia.fi/wbma/';
  mediaFilePath = 'http://media.mw.metropolia.fi/wbma/uploads/';

  loggedIn = false;

  user: User = { username: null };

  constructor(public http: HttpClient) {
    console.log('Hello MediaProvider Provider');
  }

  getAllMedia() {
    return this.http.get<Media[]>(this.mediaApi + 'media');
  }

  getSingleMedia(id) {
    return this.http.get<Media>(this.mediaApi + 'media/' + id);
  }

  login(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-type': 'application/json',
        },
      ),
    };
    return this.http.post<LoginResponse>(this.mediaApi + 'login', user,
      httpOptions);
  }

  register(userData: User) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-type': 'application/json',
        },
      ),
    };
    return this.http.post<RegisterResponse>(this.mediaApi + 'users',
      userData, httpOptions);
  }

  checkUsers(username) {
    return this.http.get(this.mediaApi + 'users/username/' + username);
  }

  getFilesByTag(tag) {
    return this.http.get<Media[]>(this.mediaApi + 'tags/' + tag);
  }

}
