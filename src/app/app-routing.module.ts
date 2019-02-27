import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryGuard } from './guards/gallery.guard';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'work',
        component: GalleryComponent
      },
      {
        path: 'work/:slug',
        component: GalleryComponent,
        resolve: {
          entry: GalleryGuard
        }
      },
      {
        path: 'work/:slug/:slug',
        component: GalleryComponent,
        resolve: {
          entry: GalleryGuard
        }
      },
      {
        path: 'work/:slug/:slug/:slug',
        component: GalleryComponent,
        resolve: {
          entry: GalleryGuard
        }
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
