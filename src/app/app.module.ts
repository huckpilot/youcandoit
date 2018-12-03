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

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    GalleryComponent,
    HeaderComponent
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
