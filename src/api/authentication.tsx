import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, sendPasswordResetEmail, sendEmailVerification } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";
import { getFirebaseErrorMessage } from "@/utils/getFirebaseErrorMessage";

export const firebaseCreateUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredential.user };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const errorMessage = getFirebaseErrorMessage(
      "createUserWithEmailAndPassword",
      firebaseError.code
    );

    return {
      error: {
        code: firebaseError.code,
        message: errorMessage
      }
    };
  }
};
export const firebaseSignInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredential.user };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const errorMessage = getFirebaseErrorMessage(
      "signInWithEmailAndPassword",
      firebaseError.code
    );

    return {
      error: {
        code: firebaseError.code,
        message: errorMessage
      }
    };
  }
};
export const firebaseLogoutUser = async () => {
  try {
    await signOut(auth);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const errorMessage = getFirebaseErrorMessage("signOut", firebaseError.code);

    return {
      error: {
        code: firebaseError.code,
        message: errorMessage
      }
    };
  }
};
export const sendEmailToResetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const errorMessage = getFirebaseErrorMessage(
      "sendPasswordResetEmail",
      firebaseError.code
    );

    return {
      error: {
        code: firebaseError.code,
        message: errorMessage
      }
    };
  }
};
export const sendEmailVerificationProcedure = async () => {
  if (auth.currentUser) {
    try {
      await sendEmailVerification(auth.currentUser);
      return { data: true };
    } catch (error) {
      const firebaseError = error as FirebaseError;
      const errorMessage = getFirebaseErrorMessage(
        "sendEmailVerification",
        firebaseError.code
      );

      return {
        error: {
          code: firebaseError.code,
          message: errorMessage
        }
      };
    }
  } else {
    return {
      error: {
        code: "unknow",
        message: "une erreur est survenue"
      }
    };
  }
};
export const updateUserIdentificationData = async (uid: string, data: any) => {
  const result = await fetch(
    "https://console.firebase.google.com/project/formation-f0515/usage/details",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uid: uid,
        data: data
      })
    }
  );
  if (!result.ok) {
    const errorResponse = await result.json();
    const firebaseError = errorResponse as FirebaseError;
    const errorMessage = getFirebaseErrorMessage(
      "updateUserIdentification",
      firebaseError.code
    );

    return {
      error: {
        code: firebaseError.code,
        message: errorMessage
      }
    };
  }
  return { data: true };
};