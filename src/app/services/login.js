import Firebase from 'firebase';
import { Link } from 'react-router'

const login = () => {
  let err, usr;
  var firebaseRef = new Firebase('https://mypooldepadel.firebaseio.com');
  return firebaseRef.authWithOAuthPopup("google");
}

export default login;