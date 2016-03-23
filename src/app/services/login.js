import Firebase from 'firebase';
import { Link } from 'react-router'

const login = (router) => {

  var firebaseRef = new Firebase('https://mypooldepadel.firebaseio.com');
  firebaseRef.authWithOAuthPopup("google", (error, user)=> {
    if(error){
      return;
    }

    router.push('/convocatoria');
  });
}

export default login;