import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBSOl8TBv50KQEnarrCsHNU57OhSJ-JP-8",
    authDomain: "e-commerce-db-dbe58.firebaseapp.com",
    databaseURL: "https://e-commerce-db-dbe58.firebaseio.com",
    projectId: "e-commerce-db-dbe58",
    storageBucket: "",
    messagingSenderId: "262224557771",
    appId: "1:262224557771:web:962186ebd0fb0ed97a8d4e",
    measurementId: "G-K9BJ6164F9"
}

export const createUserProfileDocument = async (userAuth ,data) => {  //userAuth object is the one in the authentication tab in the firebase console
    if(!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`)   //create,update and delete operations are performed on this

    const snapShot = userRef.get()   //for reading the document

    if(!snapShot.exists)
    {
        const { displayName , email } = userAuth
        const createdAt = new Date()


        if(displayName!== null)  //for sign-in with google (jugaad solution)
        {
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...data
            })

        } catch(e) {
            console.log('Not able to create user' , e.message)
        }
    }
    else {  //for sign-in with email and pwd(jugaad)
        try {
            await userRef.set({
                displayName:data,
                email,
                createdAt,
                ...data
            })

        } catch(e) {
            console.log('Not able to create user' , e.message)
        }

    }
    }

    return userRef
}

//adding shop data to firebase

// export const addCollectionAndDocuments = async (collectionKey , objectsToAdd) => {
//     const collectionRef = firestore.collection(collectionKey)

//     const batch = firestore.batch()    //so that all the set calls are made together
//     objectsToAdd.forEach(obj => {
//         const newDocRef = collectionRef.doc()    //creates a new empty doc inside the collection with a random id 
//         batch.set(newDocRef,obj)
//      })

//      return await batch.commit()
// }

//fetch data from firestore, converting array returned from firestore to object
export const convertCollectionsSnapshotToMap = (collections) => {           //transformed collection is the reqd object with all the shopdata
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    })
    
    //convert transformedCollection from array to object
    return transformedCollection.reduce((accumulator , collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})           //{} indicates initial state of object
}



firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

//for google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'}) // this ensures we get the pop up with the accounts
export const signInWithGoogle = () => auth.signInWithPopup(provider) //only google accounts in the popup and not twitter/facebook etc.

export default firebase