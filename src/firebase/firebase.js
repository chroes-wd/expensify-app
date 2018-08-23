import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey:  process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASEA_API_KEY,
    databaseURL: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_DATABASE_URL,
    storageBucket: process.env.FIREBASE_PROJECT_ID,
    messagingSenderId: process.env.FIREBASE_STORAGE_BUCKET
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};


/*
database.ref('notes').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});


database.ref('notes').on('child_changed', (snapshot) => {
    console.log('changed: ');
    console.log(snapshot.key, snapshot.val());
});
*/



//database.ref('notes').push({
//    title: 'To Do',
//    body: 'Go for a run'
//});

// push creates the Element in Firebase inside the 'notes'-Attribute with a unique id.



/*
const onValueChange = database.ref().on('value', (snapshot) => {
   console.log(snapshot.val());
   const val = snapshot.val();
   console.log(val.name + " is a " + val.job + " at " +  val.location.city );
});
*/



/*
database.ref('notes').on('value', (snapshot) => {
    const notes = [];
    snapshot.forEach((childSnapshot) => {
        notes.push({
            id: childSnapshot.key,
            title: childSnapshot.val().title,
            body: childSnapshot.val().body
            // ...childSnapshot.val()
        });
    });
    console.log(notes);
});

 */



/*
database.ref().set({
    name: "Chris Roe",
    age: 30,
    isSingle: false,
    location: {
        city: "koblenz",
        country: "rp"
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed', e);
});

database.ref('age').set(31);
database.ref('location/city').set('collogne');


database.ref('attributes').set({
    height: 175,
    weight: 68
}).then(() => {
    console.log('is saved');
}).catch((e) => {
    console.log('error: ', e);
});

database.ref('isSingle').remove();


database.ref().update({
    name: 'Max',
    age: '33',
    job: 'Developer',
    isSingle: null
});


database.ref().update({
    job: 'Manager',
    'location/city': 'Collogne'
});
*/
