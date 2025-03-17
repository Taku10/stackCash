import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth } from "./firebase";


export const doCreateUserWithEmailAndPassword = async (firstName, lastName,email, password) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    
        await updateProfile(user, {
            displayName: `${firstName} ${lastName}`
          });

          await setDoc(doc(db, "users", user.uid), {
            firstName,
            lastName,
            email,
            uid: user.uid
          });
    } catch (error) {
        console.error("Error signing up:", error.message);
      }
    };
    



export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const doSignOut = async () => {
    return auth.signOut();
}