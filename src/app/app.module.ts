import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {RegistrationComponent} from './registration/registration.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {HttpModule} from "@angular/http";
import {GithubServiceService} from './github-service.service';
import {OtherComponent} from "./other/other.component";
import {GithubComponent} from "./github/github.component";
import { ReactiveFormsModule } from '@angular/forms';
import {DatepickerComponent} from "./datepicker/datepicker.component";
import {AppTimepicker} from "./timepicker/timepicker.component";
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "ng-pick-datetime";
import {MatGridListModule, MatNativeDateModule} from '@angular/material';
import {SteamworkComponent} from "./steamwork/steamwork.component";
import {YandexmoneyComponent} from "./yandexmoney/yandexmoney.component";
import {YandexmoneyService} from "./yandexmoney/yandexmoney.service";
import {HeaderComponent} from "./header/header.component";
import {CardsComponent} from './cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AuthorizationComponent,
    OtherComponent,
    GithubComponent,
    DatepickerComponent,
    AppTimepicker,
    SteamworkComponent,
    YandexmoneyComponent,
    HeaderComponent,
    CardsComponent

  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    MatGridListModule,
    OwlNativeDateTimeModule,
    MatNativeDateModule

  ],
  providers: [GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
