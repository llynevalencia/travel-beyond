const firebaseConfig = {
    apiKey: "AIzaSyCpGe11LyQ2jGqPOoA_ItnhzA48zheqZuk",
    authDomain: "test-27a78.firebaseapp.com",
    databaseURL: "https://test-27a78-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-27a78",
    storageBucket: "test-27a78.appspot.com",
    messagingSenderId: "414688585663",
    appId: "1:414688585663:web:900d74aa9d1d5ef495a30a",
    measurementId: "G-KEH5696095"
};

//init fb
firebase.initializeApp(firebaseConfig);
//firebase.getAnalytics(app);

//init realtime
const testDB = firebase.database().ref('Test');

document.getElementById('contact_form').addEventListener('submit', submit_form);

function submit_form(e) {
    e.preventDefault();

    var name = getElementValue("name");
    var email = getElementValue("email");

    console.log(name, email)
}

const getElementValue = id => {
    return document.getElementById(id).value;
}