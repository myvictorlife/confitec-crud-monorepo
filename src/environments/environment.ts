// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //baseURL: 'http://localhost:5001/my-custom-life-property/us-central1/api',
  baseURL: 'https://us-central1-my-custom-life-property.cloudfunctions.net',
  firebaseConfig: {
    apiKey: 'AIzaSyC4evIsYkHaV0TVWuHkgcVMq3Jl8PedpbA',
    authDomain: 'my-custom-life-property.firebaseapp.com',
    databaseURL: 'https://my-custom-life-property.firebaseio.com',
    projectId: 'my-custom-life-property',
    storageBucket: 'my-custom-life-property.appspot.com',
    messagingSenderId: '236631505752',
    appId: '1:236631505752:web:b2b6d14c4847374412032d',
    measurementId: 'G-6S5NKFR421'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
