import firebaseReact from 'react-native-firebase';
import firebase from 'firebase';

// To Configure react native app with cloud of Google Firebase database !
var config = {
    apiKey: "AIzaSyCnalqPuRN83dkEgY__he2Fbr4VB1Sp090",
    authDomain: "doamor-13235.firebaseapp.com",
    databaseURL: "https://doamor-13235.firebaseio.com",
    projectId: "doamor-13235",
    storageBucket: "doamor-13235.appspot.com",
    messagingSenderId: "283805766140",
    appId: "1:283805766140:web:eafc8a61399b3d09"
};
firebase.initializeApp(config);

/**
 * Lista de instituições
 * @return Promisse firebase
 */
export const listInstitutions = function () {
    return firebase.database().ref('/institutions');
};

/**
 * Uma instituição especifica
 * @param int ID - identificador da instituicao
 * @return Promisse firebase
 */
export const getInstitution = function (id) {
    return firebase.database().ref('/institutions/' + id);
};

export const setInstitution = function (institutionId, title, address, icon, latitude, longitude, description, tel, email) {
    firebase.database().ref('institutions/' + institutionId).set({
        id: institutionId,
        title: title,
        address: address,
        icon: icon,
        latitude: latitude,
        longitude: longitude,
        description: description,
        tel: tel,
        email: email,
    });
};



