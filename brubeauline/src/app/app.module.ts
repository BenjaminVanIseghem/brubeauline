import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { BruggeComponent } from './brugge/brugge.component';
import { RecensiesComponent } from './recensies/recensies.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {path: 'info', component: InfoComponent},
  {path: 'brugge', component: BruggeComponent},
  {path: 'recensies', component: RecensiesComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    BruggeComponent,
    RecensiesComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
