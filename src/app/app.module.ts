import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryGuard } from './guards/gallery.guard';
import { ImageService } from './services/image.service';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderMComponent } from './components/header-m/header-m.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    GalleryComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    HeaderMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GalleryGuard,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
