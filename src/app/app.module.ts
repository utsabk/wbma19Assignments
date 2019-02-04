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
import { RegisterPage } from '../pages/register/register';
import { MediaUploaderPage } from '../pages/media-uploader/media-uploader';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage,
    RegisterPage,
    MediaUploaderPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage,
    RegisterPage,
    MediaUploaderPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MediaProvider,
  ],
})
export class AppModule {
}
