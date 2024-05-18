'use client';
import {useContext, useState} from "react";
import {CurrentUserContext} from "@/app/providers";
import Link from "next/link";

export default function Header() {
    const { currentUser, dispatchUser } = useContext(CurrentUserContext);

    const handleSignOut = async event => {
        event.preventDefault();
        console.log('Sign Out');
    }

    const handleSignIn = async event => {
        event.preventDefault();
        console.log('Sign In');
    }

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center">
                <img
                    src="https://www.infobae.com/pf/resources/images/logo_infobae_naranja.svg?d=2238"
                    alt="infobae"
                    className="h-8 mr-2"
                />
            </Link>
            <nav>
                { currentUser ? (
                    <div className="relative">
                        <div onClick={() => setMenuOpen(!menuOpen)} className="flex items-center cursor-pointer">
                            USUARIO
                            <svg
                                className="w-4 h-4 text-gray-700"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.292 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        {menuOpen && (
                            <div
                                onClick={() => setMenuOpen(false)}
                                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                            >
                                <ul>
                                    <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        <Link href="usuarios">Usuarios</Link>
                                    </li>
                                    <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        <a href="#" onClick={handleSignOut}>
                                            Sign Out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="profile">
                        <a href="#" onClick={handleSignIn} className="text-gray-700 font-medium">
                            Sign In with Google
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}