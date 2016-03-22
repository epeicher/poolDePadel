import Firebase from 'firebase';

const login = (router) => {
    return (dispatch) => {
      var firebaseRef = new Firebase('https://pooldepadel.firebaseio.com');
      firebaseRef.authWithOAuthPopup("google", (error, user)=> {
        if(error){
          return;
        }

        dispatch(user);

        router.transitionTo('/chat');
      });
    }
  }

export default login;