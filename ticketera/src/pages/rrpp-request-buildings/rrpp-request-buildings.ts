import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
// PROVIDERS
import { BuildingProvider } from '../../providers/building';
import { Utils } from '../../utils/utils';
// MODELS
import { OkResponseLogin } from '../../models/response';


@IonicPage()
@Component({
  selector: 'page-rrpp-request-buildings',
  templateUrl: 'rrpp-request-buildings.html',
})
export class RrppRequestBuildingsPage {

    dataUserLogged: OkResponseLogin;
    buildings: any = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public toastCtrl: ToastController,
                public buildingProvider: BuildingProvider,
                public utils: Utils) {
    }

    ionViewWillEnter() {
        this.utils.getStoredDataUserLogged('Peticiones building', true).then(userLogged => this.dataUserLogged = userLogged);
        this.buildingProvider.getAllBuildings().subscribe((buildings: any) => {
            this.buildings = buildings;
        });
    }

    sendRrppRequest(idBuilding: number) {
        this.buildingProvider.sendRrppRequestToBuilding(idBuilding).subscribe((resp: string) => {
            this.showToast(resp);
        });
    }

    private showToast(message: string) {
        let toast = this.toastCtrl.create({
          message: message,
          duration: 3000,
          position: 'middle'
        });
        toast.present();
    }
    
}
