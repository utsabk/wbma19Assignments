import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FiltersPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filters',
})
export class FiltersPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    const pattern = '\\[f\\](.*?)\\[\\/f\\]';
    const re = new RegExp(pattern);
    // console.log(re.exec(value));
    try {
      return JSON.parse(re.exec(value)[1]);
    } catch (e) {
      return {
        brightness: 100,
        contrast: 100,
        warmth: 0,
        saturation: 100,
      };
    }
  }
}
