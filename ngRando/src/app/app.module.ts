import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HikeComponent } from './hike/hike.component';
import { Hike } from './shared/hike';
import { HikeService } from './hike/hike.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { HikeDetailsComponent } from './hike-details/hike-details.component';
import { HikeFilterPipe } from './hike/hike-filter.pipe';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HikeComponent,
    HomeComponent,
    HikeDetailsComponent,
    HikeFilterPipe,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
