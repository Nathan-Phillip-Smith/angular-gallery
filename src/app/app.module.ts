import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LargePhotoComponent } from './large-photo/large-photo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhotoCompComponent } from './photo-comp/photo-comp.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photo', component: LargePhotoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LargePhotoComponent,
    NavbarComponent,
    PhotoCompComponent,
    FeedComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
