import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { UserComponent } from './user/user.component';
import { StartComponent } from './start/start.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MovieAdderComponent } from './movie-adder/movie-adder.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesearchComponent } from './moviesearch/moviesearch.component';
import { RatePipe } from './rate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    UserComponent,
    StartComponent,
    MovieDetailsComponent,
    MoviesComponent,
    MovieAdderComponent,
    MoviesearchComponent,
    RatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  UserComponent
}
