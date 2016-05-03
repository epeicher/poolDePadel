import Firebase from 'firebase';
import { Link } from 'react-router'

const login = (provider) => {
  console.log(provider)
  let err, usr;
  var firebaseRef = new Firebase('https://mypooldepadel.firebaseio.com');
  return firebaseRef.authWithOAuthPopup(provider);
}

export default login;