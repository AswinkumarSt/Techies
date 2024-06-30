import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
  import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDZq-Dz5dkj-I_-x6jNbr0HV4iV61LVd20",
    authDomain: "namastay-fa137.firebaseapp.com",
    databaseURL: "https://namastay-fa137-default-rtdb.firebaseio.com",
    projectId: "namastay-fa137",
    storageBucket: "namastay-fa137.appspot.com",
    messagingSenderId: "591100525672",
    appId: "1:591100525672:web:d826c565a424d5e2838fdd",
    measurementId: "G-BV1H3F10JN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db=getFirestore(app)
  const analytics = getAnalytics(app);