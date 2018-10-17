import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { AboutPage } from '../about/about';
import { CameraPage } from '../camera/camera';
import { FaqPage } from '../faq/faq';
import { HoursPage } from '../hours/hours';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private platform: Platform, private callNumber: CallNumber) {

  }

async call(){
  await this.platform.ready();

  try{
  await this.callNumber.callNumber('9406681300', true);
  console.log("Opened dialer.");
  }
  catch (e) {
    console.error(e || "Error launching dialer.");
  }
}

  NavtoAbout(){
    this.navCtrl.push(AboutPage);
  }

  NavtoCamera(){
    this.navCtrl.push(CameraPage);
  }

  NavtoFAQ(){
    this.navCtrl.push(FaqPage);
  }

  NavtoHours(){
    this.navCtrl.push(HoursPage);
  }

}
