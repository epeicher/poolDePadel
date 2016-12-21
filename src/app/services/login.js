import Firebase from 'firebase';
import { Link } from 'react-router'

export function login(provider) {
  let err, usr;
  let firebaseRef = new Firebase('https://mypooldepadel.firebaseio.com');
  return firebaseRef.authWithOAuthPopup(provider);
}

export function loginWithPassword(email, pwd) {
  let ref = new Firebase('https://mypooldepadel.firebaseio.com');
  return ref.authWithPassword({
    email    : email,
    password : pwd
  })
}

export function resetPassword(email) {
  let ref = new Firebase('https://mypooldepadel.firebaseio.com');
  return ref.resetPassword({
    email: email
  })
}

export function changePassword(email, oldPwd, newPwd) {
  let ref = new Firebase('https://mypooldepadel.firebaseio.com');
  return ref.changePassword({
    email       : email,
    oldPassword : oldPwd,
    newPassword : newPwd
  });
}
