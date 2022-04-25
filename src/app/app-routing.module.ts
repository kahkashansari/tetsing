import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiMovieComponent } from './api-movie/api-movie.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { OpenApiComponent } from './open-api/open-api.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'maincomp',component:MaincomponentComponent},
  {path:'openapi',component:OpenApiComponent},
  {path:'',component:ApiMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
