'use client';

import { initializeApp, getApps } from "firebase/app";
import { firebaseConfig } from "@/lib/firebase/config";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Get App configurada de Firebase
export const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
// Get Auth Firebase
export const auth = getAuth(firebaseApp);
// Get Firestore Firebase
export const db = getFirestore(firebaseApp);