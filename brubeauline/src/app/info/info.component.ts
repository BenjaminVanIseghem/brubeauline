import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  ts;

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('nl');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('nl');

    this.ts = translate;
  }

  ngOnInit() {
  }

  changeToEnglish() {
    this.ts.use('en');
  }

  changeToDutch() {
    this.ts.use('nl');
  }

  changeToFrench() {
    this.ts.use('fr');
  }

  changeToGerman() {
    this.ts.use('de');
  }

}
