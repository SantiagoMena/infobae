import {db} from "@/lib/firebase/clientApp";
import { doc, setDoc, getDoc, getDocs, query, collection } from "firebase/firestore";

// persistir usuario en firestore
export async function persistUser(user) {
    const userRef = collection(db, "users");

    return await setDoc(doc(userRef, String(user.uid)), {...user});
}

// Obtener todos los usuario existentes en la colección "users"
export async function getAllUsers() {
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    let users = [];

    // Para los usuario obtenidos crear una array con los datos de cada uno
    querySnapshot.forEach((doc) => {
        users.push(doc.data());
    });

    return users;
}

// Obtener usuarios por su UID
export async function getUserByUid(uid) {
    const userRef = doc(db, "users", uid);
    return await getDoc(userRef);
}

// Persistir usuario en firestore si no existe en la base de datos
export async function persistUserIfNotExists(user) {
    // Obtener el usuario de la base de datos
    let userDB = await getUserByUid(user.uid);

    // Si no existe guardar el usuario
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