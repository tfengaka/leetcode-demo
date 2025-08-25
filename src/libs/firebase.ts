import firebase, { ServiceAccount } from 'firebase-admin';
import serviceAccount from 'keys/firebase.json';

const admin = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount as ServiceAccount),
});

export const authFirebase = admin.auth();

export default admin;
