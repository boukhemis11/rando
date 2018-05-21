import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HikeComponent } from './hike/hike.component';
import { Hike } from './shared/hike';
import { HikeService } from './hike/hike.service';


@NgModule({
  declarations: [
    AppComponent,
    HikeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [HikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
