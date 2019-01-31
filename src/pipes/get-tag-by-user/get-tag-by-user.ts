import { Pipe, PipeTransform } from '@angular/core';
import { MediaProvider } from '../../providers/media/media';
import { Media } from '../../interfaces/pic';

/**
 * Generated class for the GetTagByUserPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'getTagByUser',
})
export class GetTagByUserPipe implements PipeTransform {
  constructor(public mediaProvider: MediaProvider) {

  }

  async transform(tag: string) {
    return new Promise((resolve, reject) => {
      this.mediaProvider.getFilesByTag(tag).subscribe((responses: Media[]) => {
        responses.forEach((response: Media) => {
          resolve(response.file_id);

          console.log(response);
          // console.log(this.mediaProvider.user.user_id);
          /*if (response.user_id === this.mediaProvider.user.user_id) {
            resolve(response.file_id);
          } else {
            reject('No profile image added.');
          }*/

        });

      });
    });
  }
}
