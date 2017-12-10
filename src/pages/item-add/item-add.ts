import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ItemAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-add',
  templateUrl: 'item-add.html',
})
export class ItemAddPage {
  item:Item = {
    name:'ipad pro',
    quantity:1,
    price:700.0,
    timeStamp:new Date().getTime(),
    active:true
  };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db: ServiceProvider) {
  }

  addItem(item:Item){
    this.db.addCollection(item).then(ref=>{
      console.log('id',ref.id);
    });
    this.navCtrl.setRoot('ItemListPage');
  }

}
