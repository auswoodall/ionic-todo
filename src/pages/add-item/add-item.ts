import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title;
  description;

  constructor(public navCtrl: NavController, public vc: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  saveItem() {
    let newItem = {
      title: this.title,
      description: this.description
    };

    this.vc.dismiss(newItem);
  }

  close() {
    this.vc.dismiss();
  }

}
