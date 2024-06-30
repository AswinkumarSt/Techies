import { db } from './firebase-setup.js';

// Use the Firebase instance to interact with your Firestore database.
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

getCities(db).then(cities => console.log(cities));