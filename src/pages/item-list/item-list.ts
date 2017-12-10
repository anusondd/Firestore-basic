import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
import { AngularFirestoreCollection, } from 'angularfire2/firestore';
import { ServiceProvider } from '../../providers/service/service';
import { FirebaseListObservable, } from 'angularfire2/database-deprecated';


@IonicPage()
@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {

  collection:Item[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db: ServiceProvider
  ) {
    this.db.getCollection().snapshotChanges().map(actions => {       
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        data.key = a.payload.doc.id;
        return data;
      });
    }).subscribe(data=>{
      this.collection = data;
      console.log('Item : ',data);
    })
  }

  
  

}
