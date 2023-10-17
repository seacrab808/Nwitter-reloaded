import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyWb5dBpXIfxszo-FV_vUHtBaUCO9gKMI",
  authDomain: "nwitter-reloaded-1f564.firebaseapp.com",
  projectId: "nwitter-reloaded-1f564",
  storageBucket: "nwitter-reloaded-1f564.appspot.com",
  messagingSenderId: "115117640852",
  appId: "1:115117640852:web:3e69bd9266ed1a9e867881",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
