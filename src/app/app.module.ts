import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MediaProvider } from '../providers/media/media';
import { MenuPage } from '../pages/menu/menu';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { PipesModule } from '../pipes/pipes.module';
import { MediaUploaderPage } from '../pages/media-uploader/media-uploader';
import { Chooser } from '@ionic-native/chooser';
import { Camera } from '@ionic-native/camera';
import { FileTransferObject } from '@ionic-native/file-transfer';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { PlayerPage } from '../pages/player/player';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage,
    ProfilePage,
    PlayerPage,
    MediaUploaderPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    PinchZoomModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage,
    ProfilePage,
    MediaUploaderPage,
    PlayerPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MediaProvider,
    PhotoViewer,
    Chooser,
    Camera,
    FileTransferObject,
  ],
})
export class AppModule {
}
