'use client';
import Providers from "@/app/providers";
import Users from "@/components/Users";
export default function PageUsers() {
    return (
        <Providers>
            <main>
                <Users />
            </main>
        </Providers>
    );
}
