import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { CameraPage } from '../camera/camera';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  about = AboutPage;
  contact = ContactPage;
  camera = CameraPage;

  constructor() {

  }
}
