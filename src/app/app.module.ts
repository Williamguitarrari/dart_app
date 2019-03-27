import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RepositoriesPage } from '../pages/repositories/repositories';
import { WebserviceProvider } from '../providers/webservice/webservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RepositoriesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RepositoriesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebserviceProvider
  ]
})
export class AppModule {}
