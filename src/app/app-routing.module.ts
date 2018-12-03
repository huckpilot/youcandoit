import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryGuard } from './guards/gallery.guard';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'gallery/:slug',
        component: GalleryComponent,
        resolve: {
          entry: GalleryGuard
        }
      },
      {
        path: 'gallery/:slug/:slug',
        component: GalleryComponent,
        resolve: {
          entry: GalleryGuard
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
