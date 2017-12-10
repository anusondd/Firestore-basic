import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage()
@Component({
  selector: 'page-item-edit',
  templateUrl: 'item-edit.html',
})
export class ItemEditPage {

  item:Item;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db: ServiceProvider
  ) {
    this.item = this.navParams.get('item');
    console.log(this.item);
  }

  saveItem(item:Item){
    this.db.editCollection(item.key,item).then(ref=>{
      console.log('Update');
    });
    this.navCtrl.setRoot('ItemListPage');
  }

  remove(item:Item){
    this.db.removeCollection(item.key,item).then(ref=>{
      console.log('Update');
    });
    this.navCtrl.setRoot('ItemListPage');
  }

}
