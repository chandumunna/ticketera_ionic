import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-admin-companies-pending',
  templateUrl: 'admin-companies-pending.html',
})
export class AdminCompaniesPendingPage {

    companies: any = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewWillEnter() {
        
    }

}
