import {db} from "@/lib/firebase/clientApp";
import { doc, setDoc, getDoc, getDocs, query, where, collection } from "firebase/firestore";

export async function persistUser(user) {
    const userRef = collection(db, "users");

    return await setDoc(doc(userRef, String(user.uid)), {...user});
}

export async function getAllUsers() {
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    let users = [];

    querySnapshot.forEach((doc) => {
        users.push(doc.data());
    });

    return users;
}

export async function getUserByUid(uid) {
    const userRef = doc(db, "users", uid);
    return await getDoc(userRef);
}

export async function persistUserIfNotExists(user) {
    let userDB = await getUserByUid(user.uid);

    if (!userDB.exists()) {
        userDB = await persistUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
        });
    }

    return userDB;
}