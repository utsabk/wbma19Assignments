import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pic } from '../../interfaces/pic';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  picArray: Pic [] = [];
  mediaPath: string = 'assets/test.json';

  constructor(private http: HttpClient, public navCtrl: NavController) {

  }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.http.get<Pic[]>(this.mediaPath).subscribe(
      (response: Pic[]) => {
        this.picArray = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
