import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-popover-admin-menu',
  templateUrl: 'popover-admin-menu.html',
})
export class PopoverAdminMenuPage {

  constructor(public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverAdminMenuPage');
  }

}
