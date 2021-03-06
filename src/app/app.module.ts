import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import * as $ from 'jquery';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpModule, Http } from '@angular/http';


import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';

import { AuthenticationGuard } from './services/authenticationGuard.service';
import { AuthenticationService } from './services/authentication.service';
import { ImageService } from './services/image.service';
import { UploadService } from './services/upload.service';
import { AnalysisService } from './services/analysis.service';

import { appRoutes } from './routes';

import { Request } from '@angular/http';
import * as b64toBlob from 'b64-to-blob';
import { Base64 } from 'js-base64';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { AnalysisComponent } from './analysis/analysis.component';
import { WebcamModule } from 'ngx-webcam';
import { TakePictureComponent } from './take-picture/take-picture.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent,
    NavbarComponent,
    LoginComponent,
    UploadComponent,
    AnalysisComponent,
    TakePictureComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpModule,
    HttpClientModule,
    WebcamModule,
  ],
  providers: [
    AuthenticationGuard,
    AuthenticationService,
    ImageService,
    UploadService,
    AnalysisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

export function HttpLoaderFactory(http: HttpClient) {
}
