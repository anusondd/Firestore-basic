import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Item } from '../../models/item';

@Injectable()
export class ServiceProvider {

  collection = this.aft.collection('items');
  constructor(
    private aft: AngularFirestore
  ) {}

  getCollection(){
      return this.aft
      .collection('items',ref => 
        ref.where('quantity','==',1)
      );

      /* 
      // Get items by equality to a property
      afs.collection('people', ref => ref.where('name', '==', 'jeff') )
      // Get items by range operators
      afs.collection('people', ref => ref.where('age', '>=', 5) 
      // Chain equality for multiple properties
      afs.collection('people', ref => ref.where('age', '==', 5) .where('name', '==', 'jeff')
      */
    }

  addCollection(data:Item){
      return this.collection.add(data);
  }

  editCollection(doc:string,data:Item){
      return this.collection.doc(doc).update(data);
  }

  removeCollection(doc:string,data:Item){
      return this.collection.doc(doc).delete();
  }

}
