import * as firebase from 'firebase';
import 'firebase/firestore';

export class FirebaseWrapper {
  constructor() {
    this.initialized = false;
    this._firebaseInstance = null; // instance of our npm package
    this._firebaseWrapperInstance = null; // instance of our wrapper
    this._firestore = null;
  }

  Initialize(config) {
    if (!this.initialized) {
      // initialize firebase
      this._firebaseInstance = firebase.initializeApp(config);
      this._firestore = firebase.firestore();
      this.initialized = true;
      console.log('It works! :D');
    } else {
      console.log('already initialized!');
    }
  }

  static GetInstance() {
    if (null == this._firebaseWrapperInstance) {
      this._firebaseWrapperInstance = new FirebaseWrapper();
    } else {
      // Already initialized, nothing more to do here
    }
    return this._firebaseWrapperInstance;
  }

  async CreateNewDocument(collectionPath, doc) {
    try {
      const ref = this._firestore.collection(collectionPath).doc();

      const timestamp = firebase.firestore.Timestamp.now().toDate();
      return await ref.set({ ...doc, createdAt: timestamp, id: ref.id });
    } catch (error) {
      console.log('something went wrong :/', error);
    }
  }
}

// Example of seeding database with data but db is not defined, probably need to import that from somewhere
// let data = {
//   name: 'Los Angeles',
//   state: 'CA',
//   country: 'USA',
// };

// // Add a new document in collection "cities" with ID 'LA'
// let setDoc = db
//   .collection('cities')
//   .doc('LA')
//   .set(data);
