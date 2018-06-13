// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBOFviH8kK892uLuEinzfVER_xbVCH7iiw",
    authDomain: "bookdata-6ac72.firebaseapp.com",
    databaseURL: "https://bookdata-6ac72.firebaseio.com",
    projectId: "bookdata-6ac72",
    storageBucket: "bookdata-6ac72.appspot.com",
    messagingSenderId: "948841075091"
  }
};
