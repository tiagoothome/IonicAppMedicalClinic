import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { CameraProvider } from '../providers/camera/camera';
import { Camera } from '@ionic-native/camera';
import { PacientesProvider } from '../providers/pacientes/pacientes';
import { MedicosProvider } from '../providers/medicos/medicos';
import { ClinicasProvider } from '../providers/clinicas/clinicas';
import { UserProvider } from '../providers/user/user';
import { IonicStorageModule } from '@ionic/storage';
import { ExportProvider } from '../providers/export/export';

const firebaseConfig = {
  apiKey: "AIzaSyB7xfsSXzKMP9YiO8LbsAIQrEmVAsFm0XE",
  authDomain: "fir-clinicaapp.firebaseapp.com",
  databaseURL: "https://fir-clinicaapp-default-rtdb.firebaseio.com",
  projectId: "fir-clinicaapp",
  storageBucket: "fir-clinicaapp.appspot.com",
  messagingSenderId: "115283997179",
  appId: "1:115283997179:web:80c50013acc4c421e95b5e",
  measurementId: "G-Q21HM57SJD"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    CameraProvider,
    Camera,
    PacientesProvider,
    MedicosProvider,
    ClinicasProvider,
    UserProvider,
    ExportProvider,
  ]
})
export class AppModule {}
