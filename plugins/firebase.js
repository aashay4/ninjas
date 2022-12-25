import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
if (!firebase.apps.length) {
    const config = {
        apiKey: 'AIzaSyCtBFIkbu0eSw2zRk2r1GkmKR6LwP51hM0',
        authDomain: 'lantech-856b1.firebaseapp.com',
        databaseURL: 'https://lantech-856b1-default-rtdb.firebaseio.com/',
        projectId: 'lantech-856b1',
        storageBucket: 'lantech-856b1.appspot.com',
        messagingSenderId: 'G-MBF41FWZ26'
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore()
export {fireDb}
