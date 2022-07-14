import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  // 사용자의 로그인, 로그아웃의 기능만을 담당하는 class
  login(providerName) {
    // const provider = new GoogleAuthProvider();
    // 아래코드는 위코드를 범용적으로 사용하기 위함
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    console.log("...logout");
  }

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
