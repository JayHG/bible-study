import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OldtestamentComponent } from './oldtestament/oldtestament.component';
import { NewtestamentComponent } from './newtestament/newtestament.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { OldtestamentService } from './oldtestament/oldtestament.service';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'oldtestament', component: OldtestamentComponent },
  { path: 'newtestament', component: NewtestamentComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OldtestamentComponent,
    NewtestamentComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [OldtestamentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
