import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  picArray: Pic [] = [
    {
      'title': 'Title 1',
      'details': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
      'thumbnail': 'http://placekitten.com/310/302',
      'original': 'http://placekitten.com/2048/1920',
    },
    {

      'title': 'Title 2',
      'details': 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
      'thumbnail': 'http://placekitten.com/321/300',
      'original': 'http://placekitten.com/2041/1922',
    },
    {
      'title': 'Title 3',
      'details': 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
      'thumbnail': 'http://placekitten.com/319/301',
      'original': 'http://placekitten.com/2039/1920',
    },
  ];

  constructor(public navCtrl: NavController) {

  }


  }


