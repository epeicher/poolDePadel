import Firebase from 'firebase';
import { Link } from 'react-router'

export function login(provider) {
  console.log(provider)
  let err, usr;
  var firebaseRef = new Firebase('https://mypooldepadel.firebaseio.com');
  return firebaseRef.authWithOAuthPopup(provider);
}

export function loginWithPassword(email, pwd) {
  var ref = new Firebase('https://mypooldepadel.firebaseio.com');
  return ref.authWithPassword({
    email    : email,
    password : pwd
  })
}
