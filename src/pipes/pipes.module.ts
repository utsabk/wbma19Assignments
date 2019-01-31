import { NgModule } from '@angular/core';
import { ThumbnailPipe } from './thumbnail/thumbnail';
import { GetTagByUserPipe } from './get-tag-by-user/get-tag-by-user';

@NgModule({
  declarations: [
    ThumbnailPipe,
    GetTagByUserPipe],
  imports: [],
  exports: [
    ThumbnailPipe,
    GetTagByUserPipe],
})
export class PipesModule {
}
