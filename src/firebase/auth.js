import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";



export const doCreateUserWithEmailAndPassword = async ( email, password, firstName) => {
  
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    console.log(user);
    if(user){
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName:firstName,
        
      });
    }
    console.log(firstName)
    console.log("User Created");
 
  } catch (error) { 
    console.log("ERROR: " + error.message);
  }


}


export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

export const doSignOut = async () => {
  return await auth.signOut();
}