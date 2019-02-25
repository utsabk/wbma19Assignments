import { NgModule } from '@angular/core';
import { ThumbnailPipe } from './thumbnail/thumbnail';
import { GetTagByUserPipe } from './get-tag-by-user/get-tag-by-user';
import { FiltersPipe } from './filters/filters';
import { DescriptionPipe } from './description/description';

@NgModule({
  declarations: [
    ThumbnailPipe,
    GetTagByUserPipe,
    FiltersPipe,
    DescriptionPipe],
  imports: [],
  exports: [
    ThumbnailPipe,
    GetTagByUserPipe,
    FiltersPipe,
    DescriptionPipe],
})
export class PipesModule {
}
