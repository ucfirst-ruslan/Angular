import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import { StreamService } from './services/stream.service';
import { DurationsPipe } from './pipes/durations.pipe';
import { PlayerPageComponent } from './components/player-page/player-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DurationsPipe,
    PlayerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    StreamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
