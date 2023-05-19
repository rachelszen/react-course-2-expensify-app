import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDNPRJgvXjvgL5cnRTb3Ojm7S-9SDi5Ewc",
    authDomain: "expensify-1f916.firebaseapp.com",
    databaseURL: "https://expensify-1f916-default-rtdb.firebaseio.com",
    projectId: "expensify-1f916",
    storageBucket: "expensify-1f916.appspot.com",
    messagingSenderId: "458851085778",
    appId: "1:458851085778:web:2d5c2d3666af533e756c0b",
    measurementId: "G-V99TS1P6B2"
  };

firebase.initializeApp(config);

const database = firebase.database();

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'rent',
//     note: '',
//     amount: 109500,
//     createdAt: 98876775
// });
