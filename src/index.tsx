import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import firebase from 'firebase/app';

firebase.initializeApp({
    apiKey: "AIzaSyCmMZijV7vQVWP57xJN1PI2S07Z2qjrOGE",
    authDomain: "adminpanel-5ea10.firebaseapp.com",
    projectId: "adminpanel-5ea10",
    storageBucket: "adminpanel-5ea10.appspot.com",
    messagingSenderId: "442849183497",
    appId: "1:442849183497:web:ccb300bd964387fa27b5d8",
    measurementId: "G-2TZ6B8J12R"


});
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
