import {
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

import { auth } from "./clientApp";

// Función signIn Firebase Google Auth
export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    try {
        return await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Error signing in with Google", error);
    }
}

// Función signOut Firebase Google Auth
export async function signOut() {
    try {
        return auth.signOut();
    } catch (error) {
        console.error("Error signing out with Google", error);
    }
}