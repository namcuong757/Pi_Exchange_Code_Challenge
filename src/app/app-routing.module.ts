import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifDetailComponent } from './gif-detail/gif-detail/gif-detail.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {path: 'gif-detail/:id', component: GifDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
